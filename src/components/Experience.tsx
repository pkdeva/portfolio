import React from 'react';
import { Building, Calendar, ExternalLink, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Clinikally (YC S22)",
      role: "DevOps Engineer",
      duration: "June 2025 - Present",
      location: "Gurgaon, NCR, India",
      description: "Building the robust, scalable, and reliable infrastructure for India's prominent digital health platform, delivering personalized dermatology and wellness solutions.",
      highlights: [
        "Architecting multi-cloud infrastructure for health-tech platform",
        "Security-first approach with zero-trust architecture",
        "Implementing auto-scaling solutions for growing user base",
        "CloudFinOps optimization delivering significant cost efficiencies"
      ],
      logo: "🏥"
    },
    {
      company: "va2pt.com",
      role: "DevOps Engineer | SRE",
      duration: "February 2024 - June 2025",
      location: "New Delhi",
      description: "Spearheaded major client projects, orchestrating critical DevOps & SRE engagements for a diverse portfolio of organizations.",
      highlights: [
        "Deployed **microservices & event-driven applications** across AWS & GCP",
        "Led **AWS cloud migration projects** with zero critical downtime",
        "Implemented **event-driven architectures** improving system scalability",
        "Achieved **~40% reduction in cloud costs** via CloudFinOps optimization",
        "Integrated **observability tools** (Prometheus/Grafana, NewRelic, SumoLogic)",
        "Developed **SRE practices** with SLIs, SLOs, and error budgets"
      ],
      logo: "☁️"
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Building reliable infrastructure and driving DevOps excellence
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`bg-white rounded-lg shadow-lg p-6 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8'} md:w-5/12`}>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{exp.logo}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;