import React, { useEffect, useRef, useState } from 'react';
import { Building, Calendar, ExternalLink, Award } from 'lucide-react';

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '-100px 0px -100px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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
    <section id="experience" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
            Professional Experience
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Building reliable infrastructure and driving DevOps excellence
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200 dark:bg-blue-700"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`relative flex items-center mb-16 sticky transition-all duration-700 ease-out ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } ${
                  visibleCards.has(index)
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-20 opacity-0 scale-95'
                }`}
                style={{
                  top: `${4 + index * 2}rem`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center transition-colors duration-300">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 p-8 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8'} md:w-5/12 hover:shadow-2xl dark:hover:shadow-gray-900/70 transition-all duration-300`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-xl mr-4 transition-colors duration-300">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{exp.role}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg transition-colors duration-300">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6 transition-colors duration-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">{exp.duration}</span>
                    <span className="mx-3">•</span>
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">{exp.description}</p>

                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 dark:text-white flex items-center transition-colors duration-300">
                      <Award className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">{highlight}</span>
                        </li>
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