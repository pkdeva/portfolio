const experiences = [
  { start: new Date(2025, 5), end: undefined, role: 'DevOps Engineer', company: 'Clinikally / YC S22', location: 'Gurgaon, India', description: 'building the infrastructure behind a digital health platform, making it easier to scale, secure, and operate as it grows.', highlights: ['multi-cloud infrastructure', 'zero-trust security controls', 'autoscaling for a growing user base', 'cloud cost optimization (FinOps)'] },
  { start: new Date(2024, 1), end: new Date(2025, 5), role: 'DevOps Engineer / SRE', company: 'va2pt.com', location: 'New Delhi, India', description: 'Spearheaded major client projects, orchestrating critical DevOps and SRE engagements for a diverse portfolio of organizations.', highlights: ['microservices across AWS and GCP', 'AWS cloud migration with zero critical downtime', '40% reduction in cloud costs', 'SLIs, SLOs, error budgets, and observability'] },
];

const monthYear = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' });
const years = (start: Date, end = new Date()) =>
  (((end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth()) / 12).toFixed(1);

const Experience = () => (
  <section id="experience" className="section section-inner">
    <div>
      <div className="section-heading"><div className="section-kicker">03 / Along the way</div><div><h2>Good teams. Real work.</h2><p>Building dependable foundations, one team at a time.</p></div></div>
      <div>{experiences.map((experience) => <article className="experience-item" key={experience.company}><div className="experience-date"><span>{monthYear.format(experience.start)} — {experience.end ? monthYear.format(experience.end) : 'Now'} · {years(experience.start, experience.end)}Y</span><span>{experience.location}</span></div><div><h3>{experience.role}</h3><div className="experience-company">{experience.company}</div><p>{experience.description}</p><ul className="plain-list">{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div>
    </div>
  </section>
);
export default Experience;
