const skillCategories: [string, string[]][] = [
  ['Cloud platforms', ['AWS', 'GCP', 'Multi-cloud']],
  ['Container orchestration', ['Kubernetes', 'Docker', 'EKS / GKE']],
  ['Infrastructure as code', ['Terraform', 'CloudFormation', 'Helm', 'Ansible']],
  ['CI / CD pipelines', ['Jenkins', 'GitHub Actions', 'AWS CodePipeline', 'Bitbucket']],
  ['Observability', ['Prometheus', 'Grafana', 'OpenTelemetry', 'NewRelic', 'ELK', 'Datadog']],
  ['Security & compliance', ['Zero-trust', 'RBAC / IAM', 'Security scanning']],
];

const Skills = () => (
  <section id="skills" className="section section-inner">
    <div>
      <div className="section-heading"><div className="section-kicker">04 / The toolkit</div><div><h2>A considered set of tools.</h2><p>Tools are useful. Knowing when to use less of them is better.</p></div></div>
      <div className="skill-columns">{skillCategories.map(([title, skills]) => <div className="skill-group" key={title}><h3>{title}</h3><div className="skill-tags">{skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div></div>)}</div>
    </div>
  </section>
);
export default Skills;
