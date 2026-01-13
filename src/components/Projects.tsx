import React, { useState, useEffect, useRef } from 'react';
import { Award, TrendingUp, Shield, Zap, X, ChevronDown } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const projects = [
    {
      title: "Multi-Cloud Infrastructure Migration",
      description: "Led comprehensive AWS to GCP migration for a health-tech platform, implementing zero-downtime deployment strategies and cost optimization.",
      technologies: ["AWS", "GCP", "Kubernetes", "Terraform", "CI/CD"],
      achievements: [
        "Zero critical downtime during migration",
        "40% reduction in infrastructure costs",
        "Improved system performance by 60%"
      ],
      icon: TrendingUp
    },
    {
      title: "Kubernetes Orchestration Platform",
      description: "Built enterprise-grade Kubernetes platform with automated scaling, monitoring, and security compliance for microservices architecture.",
      technologies: ["Kubernetes", "Docker", "Helm", "Prometheus", "Grafana"],
      achievements: [
        "Deployed 50+ microservices",
        "Automated scaling based on metrics",
        "Implemented comprehensive monitoring"
      ],
      icon: Shield
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Designed and implemented automated CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 70%.",
      technologies: ["Jenkins", "GitHub Actions", "Docker", "SonarQube", "Slack"],
      achievements: [
        "70% faster deployments",
        "Automated testing integration",
        "Enhanced security scanning"
      ],
      icon: Zap
    },
    {
      title: "Event-Driven Microservices",
      description: "Architected scalable event-driven system using AWS services, improving system throughput and reliability for real-time processing.",
      technologies: ["AWS Lambda", "SQS", "SNS", "API Gateway", "Redis"],
      achievements: [
        "Improved system scalability",
        "Real-time event processing",
        "Reduced coupling between services"
      ],
      icon: Award
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-12 sm:py-16 md:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Project Breakthroughs
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Impactful DevOps and infrastructure implementations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md dark:shadow-gray-900/50 hover:shadow-lg dark:hover:shadow-gray-900/70 transition-all duration-300 p-4 sm:p-5 cursor-pointer relative overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-400/50 transform opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(index)}
            >
              {/* Header */}
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-2 sm:mr-3 transition-colors duration-300">
                  <project.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white transition-colors duration-300 line-clamp-2">{project.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 transition-colors duration-300 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-[10px] sm:text-xs font-medium rounded-full transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] sm:text-xs font-medium rounded-full">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1.5 transition-colors duration-300">Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start text-xs text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      <div className="w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      <span className="line-clamp-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tap to view more indicator */}
              <div className="mt-3 text-xs text-blue-600 dark:text-blue-400 font-medium text-center">
                Tap to view details →
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          ref={el => itemRefs.current[projects.length] = el}
          data-index={projects.length}
          className="mt-8 sm:mt-10 text-center transition-all duration-500 opacity-0 translate-y-10"
          style={{ transitionDelay: `${projects.length * 100}ms` }}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer text-sm sm:text-base"
          >
            <Award className="h-4 w-4 mr-2" />
            Start a Project
            <ChevronDown className="h-4 w-4 ml-2" />
          </a>
        </div>

        {/* Modal Popup */}
        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 backdrop-blur-md bg-black/50 transition-all duration-300"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Card */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-2xl dark:shadow-gray-900/50 w-full max-w-lg max-h-[85vh] overflow-auto mx-4 transform transition-all duration-300 scale-100">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 z-10"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
              </button>

              <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
                {/* Header */}
                <div className="flex items-start space-x-3 pr-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    {React.createElement(projects[selectedProject].icon, {
                      className: "h-6 w-6 sm:h-7 sm:w-7 text-white"
                    })}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {projects[selectedProject].title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {projects[selectedProject].technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Project Overview</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {projects[selectedProject].description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Award className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {projects[selectedProject].achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;