// Run the built site on :4173 and Chrome with --headless --remote-debugging-port=9223.
// Then: node --experimental-websocket scripts/check-ui.mjs
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
const pages = await (await fetch('http://localhost:9223/json')).json();
const socket = new WebSocket(pages.find(page => page.type === 'page').webSocketDebuggerUrl);
await new Promise(resolve => socket.addEventListener('open', resolve, { once: true }));
let id = 0;
const pending = new Map();
socket.addEventListener('message', event => {
  const message = JSON.parse(event.data);
  if (pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  }
});
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    pending.set(++id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  assert.ok(!result.exceptionDetails, JSON.stringify(result.exceptionDetails));
  return result.result.value;
}
async function settle() {
  await new Promise(resolve => setTimeout(resolve, 120));
}
async function select(id) {
  await evaluate(`document.querySelector('#tab-${id}').click()`);
  await settle();
  assert.equal(await evaluate("document.querySelector('[role=tab][aria-selected=true]').id"), `tab-${id}`);
  assert.equal(await evaluate("document.querySelectorAll('[role=tabpanel]:not([hidden])').length"), 1);
}
try {
  await send('Page.navigate', { url: `http://localhost:4173/?check=${Date.now()}#experience` });
  for (let attempt = 0; attempt < 40; attempt++) {
    if (await evaluate("!!document.querySelector('[role=tab]')")) break;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  await evaluate('document.fonts.ready');
  assert.equal(await evaluate("document.querySelectorAll('h1').length"), 1);
  assert.equal(await evaluate("document.querySelectorAll('header [role=tablist]').length"), 1);
  assert.equal(await evaluate("document.querySelectorAll('[role=tablist]').length"), 1);
  assert.equal(await evaluate("document.querySelector('[role=tab][aria-selected=true]').id"), 'tab-experience');
  assert.equal(await evaluate("document.querySelectorAll('.project').length"), 6);
  assert.deepEqual(await evaluate("[...document.querySelectorAll('.project-content a')].map(a => a.getAttribute('href'))"), [
    'https://github.com/pkdeva/portfolio/blob/main/docs/engineering/cloud-migration.md',
    'https://github.com/pkdeva/portfolio/blob/main/docs/engineering/kubernetes-reliability.md',
    'https://github.com/pkdeva/portfolio/blob/main/docs/engineering/cloud-cost-optimization.md',
  ]);
  assert.ok(await evaluate("[...document.querySelectorAll('.project-content a')].every((a, i) => a.textContent.includes(i === 1 ? 'illustrative engineering scenario' : 'anonymized case study') && a.getAttribute('aria-label').includes(i === 1 ? 'illustrative engineering scenario' : 'anonymized case study'))"));
  assert.ok(await evaluate("document.querySelector('.project:last-child .project-tech').textContent.startsWith('Cloud Finops Case Study')"));
  assert.equal(await evaluate("document.querySelectorAll('.experience-item').length"), 2);
  assert.equal(await evaluate("document.querySelectorAll('.skill-group').length"), 7);
  for (const [width, height] of [[1440, 900], [1024, 740], [1280, 600], [768, 1024], [390, 844], [320, 640]]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
    for (const id of ['projects', 'about', 'experience', 'skills', 'contact']) {
      await select(id);
      assert.ok(await evaluate('document.documentElement.scrollWidth <= innerWidth'), `Overflow in ${id} at ${width}px`);
      assert.ok(await evaluate("[...document.querySelectorAll('[role=tab]')].every(tab => { const r = tab.getBoundingClientRect(); return r.left >= 0 && r.right <= innerWidth; })"));
      if (width > 1000 && height >= 740) {
        assert.ok(await evaluate('document.documentElement.scrollHeight <= innerHeight'), `Desktop page scroll at ${width}x${height}`);
        assert.ok(await evaluate("document.querySelector('.hero-footnote').getBoundingClientRect().bottom <= document.querySelector('footer').getBoundingClientRect().top"), 'Hero overlaps footer');
        assert.ok(await evaluate("(() => { const p = document.querySelector('[role=tabpanel]:not([hidden])'); p.scrollTop = p.scrollHeight; return p.scrollHeight - p.scrollTop <= p.clientHeight + 1; })()"), 'Panel content is unreachable');
      }
    }
  }
  await select('projects');
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'ArrowRight', code: 'ArrowRight' });
  await settle();
  assert.equal(await evaluate('document.activeElement.id'), 'tab-about');
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'End', code: 'End' });
  await settle();
  assert.equal(await evaluate('document.activeElement.id'), 'tab-contact');
  await evaluate("document.querySelector('#name').value = 'Draft survives';");
  await select('skills');
  await select('contact');
  assert.equal(await evaluate("document.querySelector('#name').value"), 'Draft survives');
  await evaluate('history.back()');
  await settle();
  assert.equal(await evaluate("document.querySelector('[role=tab][aria-selected=true]').id"), 'tab-skills');
  await evaluate('history.forward()');
  await settle();
  assert.equal(await evaluate("document.querySelector('[role=tab][aria-selected=true]').id"), 'tab-contact');
  const color = await evaluate('getComputedStyle(document.body).backgroundColor');
  await evaluate("document.querySelector('.theme-toggle').click()");
  await settle();
  assert.notEqual(await evaluate('getComputedStyle(document.body).backgroundColor'), color);
  await evaluate("document.querySelector('.theme-toggle').click()");
  await select('projects');
  await evaluate("document.querySelector('summary').click()");
  assert.ok(await evaluate("document.querySelector('details').open"));
  assert.ok(await evaluate("(() => { const a = document.querySelector('details a'); const r = a.getBoundingClientRect(); return r.width > 0 && r.left >= 0 && r.right <= innerWidth; })()"), 'Scenario link is not visible inside the expanded card');
  await select('about');
  await select('projects');
  assert.ok(await evaluate("document.querySelector('details').open"));
  await evaluate("document.querySelector('summary').click(); document.querySelector('.hero-actions a').click()");
  await settle();
  assert.equal(await evaluate("document.querySelector('[role=tab][aria-selected=true]').id"), 'tab-contact');
  await evaluate("document.querySelector('#email').value = 'test@example.com'; document.querySelector('#subject').value = 'Test'; document.querySelector('#message').value = 'Test'; window.fetch = async () => { throw new Error('Simulated offline'); }; document.querySelector('form').requestSubmit()");
  await settle();
  assert.ok(await evaluate("!!document.querySelector('[role=alert]') && !document.querySelector('button[type=submit]').disabled"));
  await evaluate("window.fetch = async () => ({ json: async () => ({ success: true }) }); document.querySelector('form').requestSubmit()");
  await settle();
  assert.ok(await evaluate("!!document.querySelector('[role=status]')"));
  await select('projects');
  for (const [name, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
    await evaluate("window.scrollTo({top:0,behavior:'instant'}); document.querySelector('#panel-projects').scrollTop = 0");
    await settle();
    const screenshot = await send('Page.captureScreenshot', { format: 'png' });
    await writeFile(`/private/tmp/portfolio-${name}.png`, Buffer.from(screenshot.data, 'base64'));
  }
  console.log('Passed: all five panels at six viewport sizes; deep links, keyboard navigation, history, draft retention, themes, project details, and mocked form failure/success.');
} finally { socket.close(); }
