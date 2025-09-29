import React from 'react';
import { ExternalLink, Github, Award, TrendingUp, Shield, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure Migration",
      description: "Led comprehensive AWS to GCP migration for a health-tech platform, implementing zero-downtime deployment strategies and cost optimization.",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400",
      technologies: ["AWS", "GCP", "Kubernetes", "Terraform", "CI/CD"],
      achievements: [
        "Zero critical downtime during migration",
        "40% reduction in infrastructure costs",
        "Improved system performance by 60%"
      ],
      icon: TrendingUp,
      color: "bg-blue-500"
    },
    {
      title: "Kubernetes Orchestration Platform",
      description: "Built enterprise-grade Kubernetes platform with automated scaling, monitoring, and security compliance for microservices architecture.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
      technologies: ["Kubernetes", "Docker", "Helm", "Prometheus", "Grafana"],
      achievements: [
        "Deployed 50+ microservices",
        "Automated scaling based on metrics",
        "Implemented comprehensive monitoring"
      ],
      icon: Shield,
      color: "bg-green-500"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Designed and implemented automated CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 70%.",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400",
      technologies: ["Jenkins", "GitHub Actions", "Docker", "SonarQube", "Slack"],
      achievements: [
        "70% faster deployments",
        "Automated testing integration",
        "Enhanced security scanning"
      ],
      icon: Zap,
      color: "bg-purple-500"
    },
    {
      title: "Event-Driven Microservices Architecture",
      description: "Architected scalable event-driven system using AWS services, improving system throughput and reliability for real-time processing.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
      technologies: ["AWS Lambda", "SQS", "SNS", "API Gateway", "GCloud Pub/Sub" ,"DynamoDB", "Redis"],
      achievements: [
        "Improved system scalability",
        "Real-time event processing",
        "Reduced coupling between services"
      ],
      icon: Award,
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Project Breakthroughs
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Showcasing impactful DevOps and infrastructure projects
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className={`${project.color} p-2 rounded-lg shadow-lg`}>
                    <project.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    <Award className="h-4 w-4 mr-2" />
                    Production Implementation
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how I can help optimize your infrastructure and accelerate your DevOps journey.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Start a Project
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;