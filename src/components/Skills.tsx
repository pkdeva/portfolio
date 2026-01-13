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
      skills: ["Jenkins", "GitHub Actions", "CodePipeline", "Bitbucket"],
      level: 92
    },
    {
      title: "Monitoring & Observability",
      icon: Monitor,
      gradient: "from-red-600 to-orange-500",
      skills: ["Prometheus", "Grafana", "NewRelic", "ELK", "Datadog"],
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
    <section id="skills" ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Animated Background - Smaller on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md dark:shadow-gray-900/50 hover:shadow-lg dark:hover:shadow-gray-900/70 transition-all duration-300 p-4 sm:p-5 relative overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-400/50 transform opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveCategory(index)}
              onClick={() => setActiveCategory(index)}
            >
              {/* Header */}
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-2 sm:mr-3 transition-colors duration-300">
                  <category.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white transition-colors duration-300 truncate">{category.title}</h3>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="mb-3">
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-[10px] sm:text-xs font-medium rounded-full transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Proficiency Level */}
              <div>
                <h4 className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 transition-colors duration-300">Proficiency:</h4>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 sm:h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: activeCategory === index ? `${category.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 min-w-[2.5rem]">{category.level}%</span>
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
          <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg dark:shadow-gray-900/50">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Site Reliability Engineering",
                "Event-Driven Architecture",
                "Microservices",
                "Load Balancing",
                "Auto Scaling",
                "Disaster Recovery",
                "CloudFinOps",
                "Linux Administration",
                "Network Troubleshooting",
                "Technical Documentation",
                "Agile/Scrum",
                "Zero-Trust Security"
              ].map((competency, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-800 dark:to-indigo-800 text-purple-800 dark:text-purple-200 rounded-full border border-purple-200 dark:border-purple-600 transition-all duration-300 text-xs sm:text-sm"
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