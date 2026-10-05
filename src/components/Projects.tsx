import { ArrowUpRight, Plus } from 'lucide-react';

const projects = [
  { title: 'moving stacks, losing sleep', description: 'led the infrastructure side of moving a health-tech platform from Shopify to a custom stack across AWS, GCP, and Azure. the challenge: keeping the migration controlled while balancing deployment, performance, and cost decisions.', technologies: ['Shopify', 'AWS', 'GCP', 'Azure', 'Kubernetes', 'Terraform'], achievements: ['deployment continuity', 'cost tuning', 'performance work'], article: 'cloud-migration' },
  { title: 'kubernetes without babysitting', description: 'built platforms for microservices with scaling, monitoring, and security controls baked in from the start.', technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus'], achievements: ['automated scaling', 'service monitoring / observability', 'security controls'], article: 'kubernetes-reliability' },
  { title: 'CI/CD & workflow automation', description: 'designed and implemented automated delivery pipelines, reducing manual release steps while improving the overall feedback loop. also implemented CDC into BigQuery for Metabase analytics and ETL workflows via Azure Data Factory for Dynamics 365 ERP data.', technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'SonarQube', 'BigQuery', 'Metabase', 'Azure Data Factory', 'Dynamics 365'], achievements: ['smoother releases', 'automated testing', 'security scanning', 'real-time analytics', 'ERP data workflows'] },
  { title: 'events without the domino effect', description: 'used Lambda, SQS, SNS, and Redis to move real-time work between services without tying their fates together.', technologies: ['AWS Lambda', 'SQS', 'SNS', 'Redis'], achievements: ['real-time event processing', 'looser coupling', 'scalable design'] },
  { title: 'updates without the store queue', description: 'built an in-house OTA publishing pipeline on a fork of stalliontech, so eligible app changes could be hot-pushed without a full Play Store or App Store release.', technologies: ['stalliontech'], achievements: ['OTA publishing', 'faster hotfixes', 'fewer full store releases'] },
  { title: 'How I cut AWS spend by about 35%', description: 'at [va2pt.com], I owned cost analysis, implementation, and savings verification across roughly 100 AWS accounts. Removing redundant networking, consolidating load balancers, rightsizing compute and databases, and cleaning up storage, logs, and pipelines reduced spend by about 35%. around ₹30 lakh is the yearly equivalent of the monthly savings.', technologies: ['AWS', 'FinOps', 'CloudWatch', 'GCP'], achievements: ['~35% lower AWS spend', '~₹30 lakh annualized savings', '~100 AWS accounts reviewed'], article: 'cloud-cost-optimization', caseStudy: true },
];

const Projects = () => (
  <section id="projects" className="section section-inner">
    <div className="section-heading"><span className="section-kicker">01 / work & engineering decisions</span><div><h2>less drama <em>in prod.</em></h2><p>Cloud migration, container platforms, delivery pipelines, event-driven architecture and mobile OTA updates. The linked writeups include an anonymized cost-optimization case study and illustrative migration and Kubernetes scenarios.</p></div></div>
    <div className="project-list">{projects.map((project, index) => (
      <details className="project" key={project.title}>
        <summary><span className="project-index">0{index + 1}</span><div><h3>{project.title}</h3><p className="project-tech">{project.caseStudy && 'Cloud Finops Case Study / '}{project.technologies.join(' / ')}</p></div><Plus className="project-arrow" size={22} /></summary>
        <div className="project-content"><p>{project.description}</p><ul className="project-results" aria-label="Work highlights">{project.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>{project.article && <a className="text-link" href={`https://github.com/pkdeva/portfolio/blob/main/docs/engineering/${project.article}.md`} target="_blank" rel="noopener noreferrer" aria-label={`Read ${project.caseStudy ? 'anonymized case study' : 'illustrative engineering scenario'}: ${project.title} on GitHub`}>Read {project.caseStudy ? 'anonymized case study' : 'illustrative engineering scenario'} on GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>}</div>
      </details>
    ))}</div>
  </section>
);
export default Projects;
