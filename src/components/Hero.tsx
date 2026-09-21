import { ArrowUpRight } from 'lucide-react';

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-intro">
      <div className="identity"><img src="/profile.png" alt="Priyanshu Kumar" width="48" height="48" /><div>Priyanshu Kumar<span>DevOps Engineer & SRE</span></div></div>
      <span className="availability"><span /> Open to collaborations</span>
    </div>
    <h1>Less friction.<br />More<br className="hero-line-break" /> <em>possibility.</em></h1>
    <p className="hero-copy">I build the infrastructure behind good experiences. Reliable systems. Thoughtful automation. Room to grow.</p>
    <div className="hero-actions"><a className="button-primary" href="#contact">Let's talk <ArrowUpRight size={16} /></a><a className="text-link" href="/PK DevOps CV.pdf" target="_blank" rel="noopener noreferrer">View résumé <ArrowUpRight size={14} /></a></div>
    <div className="hero-footnote"><span>Currently building at <a href="#experience">Clinikally <ArrowUpRight size={12} /></a></span><span>Based in India · Working everywhere</span></div>
  </section>
);
export default Hero;
