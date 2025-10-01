import React, { useState } from 'react';
import { Cloud, Server, Settings, Monitor, Shield, GitBranch } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

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
    <section id="skills" className="py-20 bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Interactive Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onMouseEnter={() => setActiveCategory(index)}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>

              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg group-hover:border-transparent group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500`}>
                  <category.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {category.title}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-300/50 group-hover:bg-gray-200 group-hover:text-gray-900 transition-all duration-300">
                    
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Proficiency</span>
                    <span>{category.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                      style={{
                        width: activeCategory === index ? `${category.level}%` : '0%',
                        transform: activeCategory === index ? 'scaleX(1)' : 'scaleX(0)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Competencies */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200/30 to-indigo-200/30 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-purple-200/50 shadow-xl">
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
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 rounded-full border border-purple-200 hover:from-purple-600 hover:to-indigo-600 hover:text-white hover:border-purple-400 transition-all duration-300 transform hover:scale-105 cursor-default text-sm"
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