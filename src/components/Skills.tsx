import { useState, useEffect, useRef } from 'react';
import { Cloud, Server, Settings, Monitor, Shield, GitBranch } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            }
            const index = (entry.target as HTMLElement).dataset.index;
            if (index) {
              itemRefs.current[parseInt(index)]?.classList.remove('opacity-0', 'translate-y-10');
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      gradient: "from-blue-600 to-cyan-500",
      skills: ["AWS", "GCP", "Multi-Cloud"],
      level: 95
    },
    {
      title: "Container Orchestration",
      icon: Server,
      gradient: "from-emerald-600 to-teal-500",
      skills: ["Kubernetes", "Docker", "EKS/GKE"],
      level: 90
    },
    {
      title: "Infrastructure as Code",
      icon: Settings,
      gradient: "from-orange-600 to-red-500",
      skills: ["Terraform", "CloudFormation", "Helm", "Ansible"],
      level: 88
    },
    {
      title: "CI/CD Pipelines",
      icon: GitBranch,
      gradient: "from-purple-600 to-pink-500",
      skills: ["Jenkins", "GitHub Actions", "AWS CodePipeline", "Bitbucket Pipelines"],
      level: 92
    },
    {
      title: "Logging, Monitoring & Observability",
      icon: Monitor,
      gradient: "from-red-600 to-orange-500",
      skills: ["Prometheus", "Grafana Stack", "OpenTelemetry", "NewRelic", "ELK Stack", "SumoLogic"],
      level: 85
    },
    {
      title: "Security & Compliance", 
      icon: Shield,
      gradient: "from-indigo-600 to-purple-500",
      skills: ["Zero-Trust", "RBAC/IAM", "Security Scanning"],
      level: 87
    }
  ];


  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid - Project Breakthroughs Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900/70 transition-all duration-500 p-6 relative overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:scale-105 transform opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveCategory(index)}
            >
              {/* Glowing edge effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300 -z-20"></div>

              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mr-3 transition-colors duration-300">
                  <category.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300">{category.title}</h3>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Proficiency Level */}
              <div>
                <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-300">Proficiency Level:</h4>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: activeCategory === index ? `${category.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300 min-w-[3rem]">{category.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Competencies */}
        <div 
          ref={el => itemRefs.current[skillCategories.length] = el}
          data-index={skillCategories.length}
          className="relative transition-all duration-500 opacity-0 translate-y-10"
          style={{ transitionDelay: `${skillCategories.length * 100}ms` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200/30 to-indigo-200/30 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-purple-200/50 dark:border-purple-700/50 shadow-xl dark:shadow-gray-900/50">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Site Reliability Engineering (SRE)",
                "Event-Driven Architecture",
                "Microservices",
                "Load Balancing",
                "Routing & Traffic Management",
                "Auto Scaling",
                "Disaster Recovery",
                "CloudFinOps",
                "Performance Tuning",
                "Linux Administration",
                "Network Troubleshooting",
                "TCP/IP Networks",
                "Technical Documentation",
                "Agile/Scrum",
                "Zero-Trust Security"
                
              ].map((competency, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-800 dark:to-indigo-800 text-purple-800 dark:text-purple-200 rounded-full border border-purple-200 dark:border-purple-600 hover:from-purple-600 hover:to-indigo-600 dark:hover:from-purple-500 dark:hover:to-indigo-500 hover:text-white hover:border-purple-400 dark:hover:border-purple-300 transition-all duration-300 transform hover:scale-105 cursor-default text-sm"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;