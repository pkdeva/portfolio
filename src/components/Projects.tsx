import { Plus } from 'lucide-react';

const projects = [
  { title: 'Multi-cloud infrastructure migration', description: 'Led a comprehensive AWS to GCP migration for a health-tech platform, with zero-downtime deployment strategies and cost optimization.', technologies: ['AWS', 'GCP', 'Kubernetes', 'Terraform'], achievements: ['Zero critical downtime', '40% reduction in infrastructure costs', '60% performance improvement'] },
  { title: 'Kubernetes orchestration platform', description: 'Built an enterprise-grade Kubernetes platform with automated scaling, monitoring, and security compliance for microservices.', technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus'], achievements: ['50+ microservices deployed', 'Metric-driven scaling', 'Comprehensive monitoring'] },
  { title: 'CI/CD pipeline automation', description: 'Designed and implemented automated delivery pipelines, reducing deployment time while improving the security feedback loop.', technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'SonarQube'], achievements: ['70% faster deployments', 'Automated testing', 'Security scanning'] },
  { title: 'Event-driven microservices', description: 'Architected a scalable event-driven system for real-time processing with improved throughput, reliability, and service autonomy.', technologies: ['AWS Lambda', 'SQS', 'SNS', 'Redis'], achievements: ['Real-time event processing', 'Reduced service coupling', 'Improved scalability'] },
];

const Projects = () => (
  <section id="projects" className="section section-inner">
    <div className="section-heading"><span className="section-kicker">01 / Selected work</span><div><h2>Built to <em>hold up.</em></h2><p>A few things I've helped make work better.</p></div></div>
    <div className="project-list">{projects.map((project, index) => (
      <details className="project" key={project.title}>
        <summary><span className="project-index">0{index + 1}</span><div><h3>{project.title}</h3><p className="project-tech">{project.technologies.join(' / ')}</p></div><Plus className="project-arrow" size={22} /></summary>
        <div className="project-content"><p>{project.description}</p><ul className="project-results">{project.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></div>
      </details>
    ))}</div>
    <p className="work-note">Infrastructure is mostly invisible. The impact isn't.</p>
  </section>
);
export default Projects;
