const experiences = [
  { date: 'Jun 2025 — Now', role: 'DevOps Engineer', company: 'Clinikally / YC S22', location: 'Gurgaon, India', description: "Building the robust, scalable, and reliable infrastructure for India's prominent digital health platform.", highlights: ['Architecting multi-cloud infrastructure', 'Security-first, zero-trust architecture', 'Auto-scaling for a growing user base', 'CloudFinOps optimization'] },
  { date: 'Feb 2024 — Jun 2025', role: 'DevOps Engineer / SRE', company: 'va2pt.com', location: 'New Delhi, India', description: 'Spearheaded major client projects, orchestrating critical DevOps and SRE engagements for a diverse portfolio of organizations.', highlights: ['Microservices across AWS and GCP', 'AWS cloud migration with zero critical downtime', '40% reduction in cloud costs', 'SLIs, SLOs, error budgets, and observability'] },
];

const Experience = () => (
  <section id="experience" className="section section-inner">
    <div>
      <div className="section-heading"><div className="section-kicker">03 / Along the way</div><div><h2>Good teams. Real work.</h2><p>Building dependable foundations, one team at a time.</p></div></div>
      <div>{experiences.map((experience) => <article className="experience-item" key={experience.company}><div className="experience-date">{experience.date}<br /><br />{experience.location}</div><div><h3>{experience.role}</h3><div className="experience-company">{experience.company}</div><p>{experience.description}</p><ul className="plain-list">{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div>
    </div>
  </section>
);
export default Experience;
