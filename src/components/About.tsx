import { ArrowUpRight } from 'lucide-react';

const About = () => (
  <section id="about" className="section section-inner">
    <div className="section-heading"><span className="section-kicker">02 / A little about me</span><h2>Complex underneath.<br /><em>Simple on the surface.</em></h2></div>
    <div className="about-body">
      <p className="body-copy">I'm Priyanshu, a DevOps Engineer and SRE who cares about the things you shouldn't have to think about. The deployment that just works. The system that stays up. The cloud bill that makes sense.</p>
      <div><p className="body-copy secondary-copy">At <strong>Clinikally</strong>, a Y Combinator–backed digital health platform, I build reliable infrastructure across clouds, Kubernetes, and delivery pipelines. My approach is straightforward: automate the repetitive, make security foundational, and keep things as simple as they can be.</p><a className="text-link" href="/PK DevOps CV.pdf" target="_blank" rel="noopener noreferrer">A little more, on paper <ArrowUpRight size={16} /></a></div>
    </div>
  </section>
);
export default About;
