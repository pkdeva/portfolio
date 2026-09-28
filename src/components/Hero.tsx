import { ArrowUpRight } from 'lucide-react';

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-intro">
      <div className="identity"><img src="/profile.png" alt="Priyanshu Kumar" width="48" height="48" /><div>Priyanshu Kumar<span>DevOps Engineer & SRE</span></div></div>
      <span className="availability"><span /> Open to collaborations</span>
    </div>
    <h1>Things break.<br /><em>I plan for that.</em></h1>
    <p className="hero-copy">I make deployments routine, traffic spikes manageable, and cloud bills less surprising. <div>I automate the adrenaline out of releases.</div></p>
    <div className="hero-actions"><a className="button-primary" href="#contact">Let's talk <ArrowUpRight size={16} /></a><a className="text-link" href="/PK DevOps CV.pdf" target="_blank" rel="noopener noreferrer">View résumé <ArrowUpRight size={14} /></a></div>
    <div className="hero-footnote"><span>Currently building at <a href="#experience">Clinikally <ArrowUpRight size={12} /></a></span><span>based in India · working everywhere</span></div>
  </section>
);
export default Hero;
