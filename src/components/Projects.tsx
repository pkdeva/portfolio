import { Plus } from 'lucide-react';

const projects = [
  { title: 'moving stacks, losing sleep', description: 'led the infrastructure side of moving a health-tech platform from Shopify to a custom stack across AWS, GCP, and Azure. the challenge: keeping the migration controlled while balancing deployment, performance, and cost decisions.', technologies: ['Shopify', 'AWS', 'GCP', 'Azure', 'Kubernetes', 'Terraform'], achievements: ['deployment continuity', 'cost tuning', 'performance work'] },
  { title: 'kubernetes without babysitting', description: 'built platforms for microservices with scaling, monitoring, and security controls baked in from the start.', technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus'], achievements: ['automated scaling', 'service monitoring / observability', 'security controls'] },
  { title: 'CI/CD & workflow automation', description: 'designed and implemented automated delivery pipelines, reducing manual release steps while improving the overall feedback loop.', technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'SonarQube'], achievements: ['smoother releases', 'automated testing', 'security scanning'] },
  { title: 'events without the domino effect', description: 'used Lambda, SQS, SNS, and Redis to move real-time work between services without tying their fates together.', technologies: ['AWS Lambda', 'SQS', 'SNS', 'Redis'], achievements: ['real-time event processing', 'looser coupling', 'scalable design'] },
];

const Projects = () => (
  <section id="projects" className="section section-inner">
    <div className="section-heading"><span className="section-kicker">01 / things i’ve shipped</span><div><h2>less drama <em>in prod.</em></h2><p>cloud migration, container platforms, delivery pipelines, event-driven architecture and cloud-finops.</p></div></div>
    <div className="project-list">{projects.map((project, index) => (
      <details className="project" key={project.title}>
        <summary><span className="project-index">0{index + 1}</span><div><h3>{project.title}</h3><p className="project-tech">{project.technologies.join(' / ')}</p></div><Plus className="project-arrow" size={22} /></summary>
        <div className="project-content"><p>{project.description}</p><ul className="project-results">{project.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></div>
      </details>
    ))}</div>
  </section>
);
export default Projects;
