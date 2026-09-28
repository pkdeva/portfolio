import { ArrowUpRight } from 'lucide-react';

const About = () => (
  <section id="about" className="section section-inner">
    <div className="section-heading"><span className="section-kicker">02 / A lil about me</span><h2>if i'm the only one<br /><em>who gets it, i failed.</em></h2></div>
    <div className="about-body">
      <p className="body-copy">i care about the moment someone else has to deploy, debug, or change what i built. if the answer lives in my head instead of the system, i haven't finished the job.</p>
      <div><p className="body-copy secondary-copy">that means automating what repeats, making failures easier to trace, and leaving a way back when a change goes sideways. i want infrastructure the next person can understand without a tour guide; and a cloud bill that makes sense :) </p><a className="text-link" href="/PK DevOps CV.pdf" target="_blank" rel="noopener noreferrer">A little more, on paper <ArrowUpRight size={16} /></a></div>
    </div>
  </section>
);
export default About;
