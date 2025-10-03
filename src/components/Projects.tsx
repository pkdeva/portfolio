import React, { useState } from 'react';
import { ExternalLink, Github, Award, TrendingUp, Shield, Zap, X, ChevronDown } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
      title: "Event-Driven Microservices Architecture",
      description: "Architected scalable event-driven system using AWS services, improving system throughput and reliability for real-time processing.",
      technologies: ["AWS Lambda", "SQS", "SNS", "API Gateway", "GCloud Pub/Sub", "DynamoDB", "Redis"],
      achievements: [
        "Improved system scalability",
        "Real-time event processing",
        "Reduced coupling between services"
      ],
      icon: Award
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
            Project Breakthroughs
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Impactful DevOps and infrastructure implementations
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900/70 transition-all duration-300 p-6 cursor-pointer relative overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:scale-105 transform"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(index)}
            >
              {/* Glowing edge effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300 -z-20"></div>
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mr-3 transition-colors duration-300">
                  <project.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300">{project.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 transition-colors duration-300">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            <Award className="h-4 w-4 mr-2" />
            Start a Project
            <ChevronDown className="h-4 w-4 ml-2" />
          </a>
        </div>

        {/* Liquid Glass Popup Overlay */}
        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with liquid glass effect */}
            <div
              className="absolute inset-0 backdrop-blur-xl bg-white/20 dark:bg-black/30 transition-all duration-500 ease-out"
              onClick={() => setSelectedProject(null)}
            >
              {/* Animated background particles */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Popup Card */}
            <div className="relative max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 shadow-2xl dark:shadow-gray-900/50 p-8 transform transition-all duration-500 ease-out scale-100 animate-pulse">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-gray-100/80 dark:bg-gray-700/80 hover:bg-gray-200/80 dark:hover:bg-gray-600/80 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                >
                  <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </button>

                {/* Enhanced Project Content */}
                <div className="space-y-6">
                  {/* Header with Enhanced Icon */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      {React.createElement(projects[selectedProject].icon, {
                        className: "h-8 w-8 text-white"
                      })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {projects[selectedProject].title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Description */}
                  <div className="bg-gray-50/50 dark:bg-gray-700/30 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Project Overview</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {projects[selectedProject].description}
                    </p>
                  </div>

                  {/* Enhanced Achievements */}
                  <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {projects[selectedProject].achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
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