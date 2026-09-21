import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

const projects = [
  { title: 'Multi-cloud infrastructure migration', description: 'Led a comprehensive AWS to GCP migration for a health-tech platform, with zero-downtime deployment strategies and cost optimization.', technologies: ['AWS', 'GCP', 'Kubernetes', 'Terraform'], achievements: ['Zero critical downtime', '40% reduction in infrastructure costs', '60% performance improvement'] },
  { title: 'Kubernetes orchestration platform', description: 'Built an enterprise-grade Kubernetes platform with automated scaling, monitoring, and security compliance for microservices.', technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus'], achievements: ['50+ microservices deployed', 'Metric-driven scaling', 'Comprehensive monitoring'] },
  { title: 'CI/CD pipeline automation', description: 'Designed and implemented automated delivery pipelines, reducing deployment time while improving the security feedback loop.', technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'SonarQube'], achievements: ['70% faster deployments', 'Automated testing', 'Security scanning'] },
  { title: 'Event-driven microservices', description: 'Architected a scalable event-driven system for real-time processing with improved throughput, reliability, and service autonomy.', technologies: ['AWS Lambda', 'SQS', 'SNS', 'Redis'], achievements: ['Real-time event processing', 'Reduced service coupling', 'Improved scalability'] },
];

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null);
  return <section id="projects" className="section"><div className="section-inner"><div className="section-heading"><div className="section-kicker">04 / Selected work</div><div><h2>Proof, in production.</h2><p>A few systems, migrations, and patterns I have helped bring to life.</p></div></div><div className="project-grid">{projects.map((project, index) => <article className="project" key={project.title} onClick={() => setSelected(index)}><div className="project-top"><h3>{project.title}</h3><span className="project-index">0{index + 1} <ArrowUpRight className="project-arrow" size={18} /></span></div><p>{project.description}</p><div className="skill-tags">{project.technologies.map((technology) => <span className="skill-tag" key={technology}>{technology}</span>)}</div></article>)}</div>{selected !== null && <div className="project-modal-backdrop" onClick={() => setSelected(null)}><div className="project-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close project"><X size={20} /></button><span className="section-kicker">Project 0{selected + 1}</span><h3>{projects[selected].title}</h3><p>{projects[selected].description}</p><ul className="plain-list">{projects[selected].achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></div></div>}</div></section>;
};
export default Projects;
