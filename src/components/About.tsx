const solutions = [
  ['01', 'Auto-scaling infrastructure', 'Intelligent provisioning and predictive load management that keeps systems responsive.'],
  ['02', 'Load balancing', 'Traffic distribution strategies that keep every region available and performing.'],
  ['03', 'Resource optimization', 'Right-sized infrastructure that protects both performance and the budget.'],
  ['04', 'Cost management', 'CloudFinOps practices that turn cloud spend into a deliberate engineering decision.'],
];

const About = () => (
  <section id="about" className="section">
    <div className="section-inner">
      <div className="section-heading">
        <div className="section-kicker">01 / cat about.txt</div>
        <div><h2>Good infrastructure is felt, not noticed.</h2><p>Quiet systems. Clear decisions. A bias toward automation.</p></div>
      </div>
      <div className="split">
        <p className="body-copy">I'm a DevOps Engineer and SRE at <strong>Clinikally</strong>, where I architect robust infrastructure for a digital health platform. My work spans <strong>CloudFinOps</strong>, multi-cloud environments, Kubernetes, and advanced CI/CD automation.</p>
        <p className="body-copy">With 2+ years in cloud infrastructure, I pair technical excellence with business impact. I care about <strong>security-first architecture</strong>, systems that scale without drama, and the "automate everything" mindset.</p>
      </div>
      <div className="rule-list" style={{ marginTop: 80 }}>
        {solutions.map(([number, title, description]) => <div className="rule-row" key={number}><span className="number">{number}</span><h3>{title}</h3><p>{description}</p></div>)}
      </div>
    </div>
  </section>
);
export default About;
