import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sections = [
  { id: 'projects', label: 'Work', Component: Projects },
  { id: 'about', label: 'About', Component: About },
  { id: 'experience', label: 'Experience', Component: Experience },
  { id: 'skills', label: 'Toolkit', Component: Skills },
  { id: 'contact', label: 'Contact', Component: Contact },
];
const sectionFromHash = () => sections.find(section => `#${section.id}` === window.location.hash)?.id ?? 'projects';

function App() {
  const [active, setActive] = useState(sectionFromHash);
  const browser = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const restoreSection = () => setActive(sectionFromHash());
    window.addEventListener('popstate', restoreSection);
    window.addEventListener('hashchange', restoreSection);
    return () => {
      window.removeEventListener('popstate', restoreSection);
      window.removeEventListener('hashchange', restoreSection);
    };
  }, []);

  function navigate(id: string) {
    const next = id === 'home' ? 'projects' : id;
    if (window.location.hash !== `#${id}`) window.history.pushState(null, '', `#${id}`);
    setActive(next);
    requestAnimationFrame(() => {
      document.getElementById(`tab-${next}`)?.focus({ preventScroll: true });
      if (id === 'home') window.scrollTo({ top: 0 });
      else if (window.matchMedia('(max-width: 1000px)').matches) browser.current?.scrollIntoView({ block: 'start' });
    });
  }

  function handleSectionLink(event: MouseEvent<HTMLDivElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = (event.target as Element).closest('a');
    const id = link?.getAttribute('href')?.slice(1);
    if (!link?.getAttribute('href')?.startsWith('#') || !id || (id !== 'home' && !sections.some(section => section.id === id))) return;
    event.preventDefault();
    navigate(id);
  }

  return (
    <DarkModeProvider>
      <div className="portfolio-shell" onClick={handleSectionLink}>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header>
          <div className="section-tabs" role="tablist" aria-label="Explore the portfolio">
            {sections.map(({ id, label }, index) => (
              <button key={id} id={`tab-${id}`} type="button" role="tab" aria-selected={active === id} aria-controls={`panel-${id}`} tabIndex={active === id ? 0 : -1} onClick={() => navigate(id)} onKeyDown={event => {
                let next = index;
                if (event.key === 'ArrowRight') next = (index + 1) % sections.length;
                else if (event.key === 'ArrowLeft') next = (index + sections.length - 1) % sections.length;
                else if (event.key === 'Home') next = 0;
                else if (event.key === 'End') next = sections.length - 1;
                else return;
                event.preventDefault();
                navigate(sections[next].id);
              }}>{label}</button>
            ))}
          </div>
        </Header>
        <main id="main" className="portfolio-layout section-inner" tabIndex={-1}>
          <Hero />
          <div className="portfolio-browser" ref={browser}>
            {sections.map(({ id, Component }) => (
              <div key={id} id={`panel-${id}`} className="portfolio-panel" role="tabpanel" aria-labelledby={`tab-${id}`} tabIndex={0} hidden={active !== id}>
                <Component />
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}
export default App;
