import { ArrowDown, ArrowUpRight } from 'lucide-react';

const Hero = () => (
  <section id="home" className="hero section-inner">
    <div className="hero-intro">
      <div className="identity"><img src="/profile.png" alt="Priyanshu Kumar" width="48" height="48" /><div>Priyanshu Kumar<span>DevOps Engineer & SRE</span></div></div>
      <span className="availability"><span /> Open to collaborations</span>
    </div>
    <h1>Less friction.<br />More <em>possibility.</em></h1>
    <div className="hero-bottom">
      <p className="hero-copy">I build the infrastructure behind good experiences.<br className="desktop-break" /> Reliable systems. Thoughtful automation. Room to grow.</p>
      <a className="round-link" href="#projects" aria-label="Explore selected work"><ArrowDown size={23} /></a>
    </div>
    <div className="hero-footnote"><span>Currently building at <a href="#experience">Clinikally <ArrowUpRight size={12} /></a></span><span>Based in India · Working everywhere</span></div>
  </section>
);
export default Hero;
