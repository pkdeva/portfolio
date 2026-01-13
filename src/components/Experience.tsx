import { useEffect, useRef, useState } from 'react';
import { Calendar, Award, Cloud } from 'lucide-react';

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt((entry.target as HTMLElement).dataset.index as string);
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set(Array.from(prev).concat(index)));
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px 0px -50px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !containerRef.current) return;
      
      // Only run timeline animation on desktop
      if (window.innerWidth < 768) return;

      const container = containerRef.current;
      const timeline = timelineRef.current;
      const { top, height } = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const scrollableHeight = height - viewportHeight;
      if (scrollableHeight <= 0) {
        timeline.style.transform = 'scaleY(1)';
        return;
      }

      const progress = Math.max(0, Math.min(1, (-top + viewportHeight / 2) / scrollableHeight));
      
      timeline.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
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
        "Deployed microservices & event-driven applications across AWS & GCP",
        "Led AWS cloud migration projects with zero critical downtime",
        "Implemented event-driven architectures improving system scalability",
        "Achieved ~40% reduction in cloud costs via CloudFinOps optimization",
        "Integrated observability tools (Prometheus/Grafana, NewRelic, SumoLogic)",
        "Developed SRE practices with SLIs, SLOs, and error budgets"
      ],
      logo: Cloud
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Professional Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Building reliable infrastructure and driving DevOps excellence
          </p>
        </div>

        <div ref={containerRef} className="mt-8 sm:mt-12 relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-700">
            <div ref={timelineRef} className="h-full w-full bg-blue-600 dark:bg-blue-400 origin-top" style={{ transform: 'scaleY(0)' }}></div>
          </div>

          <div className="space-y-6 md:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`relative flex items-center mb-6 md:mb-12 transition-all duration-700 ease-out ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } ${
                  visibleCards.has(index)
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-10 opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg items-center justify-center transition-colors duration-300 z-10">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 p-4 sm:p-6 w-full ${index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8'} md:w-5/12 hover:shadow-xl dark:hover:shadow-gray-900/70 transition-all duration-300`}>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900 rounded-lg sm:rounded-xl flex items-center justify-center text-base sm:text-xl mr-3 transition-colors duration-300">
                      {typeof exp.logo === 'string' ? exp.logo : <exp.logo className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300 truncate">{exp.role}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base transition-colors duration-300 truncate">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300 gap-1">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span className="font-medium">{exp.duration}</span>
                    <span className="mx-1 sm:mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">{exp.description}</p>

                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center transition-colors duration-300">
                      <Award className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                            {highlight}
                          </span>
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