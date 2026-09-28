const skillCategories: [string, string[]][] = [
  ['Cloud platforms', ['AWS', 'GCP', 'Azure', 'Multi-cloud']],
  ['Container orchestration', ['Kubernetes', 'Docker', 'EKS / GKE']],
  ['Infrastructure as code', ['Terraform', 'CloudFormation', 'Helm']],
  ['CI / CD pipelines', ['Jenkins', 'GitHub Actions', 'AWS CodePipeline', 'Bitbucket', 'GCP Cloud Build']],
  ['Observability', ['NewRelic', 'Datadog', 'ELK', 'OpenTelemetry', 'Prometheus', 'Grafana']],
  ['Security & compliance', ['Zero-trust', 'RBAC / IAM', 'Security scanning']],
  ['Data & analytics', ['BigQuery', 'Metabase', 'Azure Data Factory', 'Dynamics 365']],
];

const Skills = () => (
  <section id="skills" className="section section-inner">
    <div>
      <div className="section-heading"><div className="section-kicker">04 / The toolkit</div><div><h2>the stack has to pay rent.</h2><p>the tools change. the job stays the same: ship safely, see what’s happening, and make the next change easier. every tool costs something. it has to give more back.</p></div></div>
      <div className="skill-columns">{skillCategories.map(([title, skills]) => <div className="skill-group" key={title}><h3>{title}</h3><div className="skill-tags">{skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div></div>)}</div>
    </div>
  </section>
);
export default Skills;
