import React from 'react';
import { Cloud, Server, Settings, Monitor, Code, Database, Shield, GitBranch, CheckCircle, Star, Zap, Award, Building } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "bg-blue-500",
      skills: [
        "Amazon Web Services (AWS)",
        "Google Cloud Platform (GCP)"
      ]
    },
    {
      title: "Containerization & Orchestration",
      icon: Server,
      color: "bg-green-500",
      skills: [
        "Docker",
        "Kubernetes",
        "EKS/GKE",
        "ECS/Cloud Run"
      ]
    },
    {
      title: "CI/CD Tools",
      icon: GitBranch,
      color: "bg-purple-500",
      skills: [
        "Jenkins",
        "GitHub Actions",
        "AWS CodePipeline",
        "BitBucket Pipelines"
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: Settings,
      color: "bg-orange-500",
      skills: [
        "Terraform",
        "CloudFormation",
        "Ansible"
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: Monitor,
      color: "bg-red-500",
      skills: [
        "Prometheus/Grafana",
        "NewRelic",
        "AWS CloudWatch",
        "SumoLogic"
      ]
    },
    {
      title: "Programming & Automation",
      icon: Code,
      color: "bg-indigo-500",
      skills: [
        "Python",
        "Bash Scripting",
        "YAML/JSON",
        "Go"
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "bg-teal-500",
      skills: [
        "Amazon RDS",
        "MongoDB",
        "Redis",
        "PostgreSQL"
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "bg-pink-500",
      skills: [
        "AWS Security",
        "RBAC/IAM",
        "SSL/TLS",
        "Security Scanning"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive expertise across modern DevOps and cloud technologies
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className={`${category.color} p-3 rounded-lg`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Star className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Site Reliability Engineering (SRE)",
              "Event-Driven Architecture",
              "Microservices",
              "Load Balancing",
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
            ].map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Certifications & Education</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center p-6 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex-shrink-0">
                <Award className="h-10 w-10 text-orange-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">AWS Certified Cloud Practitioner</h4>
                <p className="text-sm text-gray-600">November 2024</p>
              </div>
            </div>

            <div className="flex items-center p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex-shrink-0">
                <Building className="h-10 w-10 text-blue-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">Bachelor's of Computer Application (B.C.A)</h4>
                <p className="text-sm text-gray-600">Indira Gandhi National Open University (2023-2026)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;