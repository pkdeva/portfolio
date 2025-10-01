import React from 'react';
import { ExternalLink, Github, Award, TrendingUp, Shield, Zap } from 'lucide-react';

const Projects = () => {
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
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Project Breakthroughs
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Impactful DevOps and infrastructure implementations
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                  <project.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
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
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Award className="h-4 w-4 mr-2" />
            Start a Project
            <ExternalLink className="h-4 w-4 ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;