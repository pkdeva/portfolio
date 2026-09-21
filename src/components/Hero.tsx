import { ArrowUpRight, Download } from 'lucide-react';

const Hero = () => (
  <section id="home" className="hero">
    <div className="section-inner">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">DevOps engineer / SRE catalyst</div>
          <h1>Systems that <em>stay</em> <span>steady.</span></h1>
          <p className="hero-copy">I build resilient cloud infrastructure for teams moving quickly and thoughtfully. Currently shaping reliability at Clinikally, a Y-Combinator backed health-tech company.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#contact">Start a conversation <ArrowUpRight size={16} /></a>
            <a className="text-link" href="/PK DevOps CV.pdf" target="_blank" rel="noopener noreferrer">View CV <Download size={15} /></a>
          </div>
          <div className="scroll-cue">Scroll to explore</div>
        </div>
        <div className="hero-visual">
          <img className="hero-image" src="/profile.png" alt="Priyanshu Kumar" />
          <div className="hero-note"><strong>02+</strong>years of making complex systems feel simple.</div>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
