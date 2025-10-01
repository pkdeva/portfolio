import { useEffect, useRef, useState } from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }

          const index = (entry.target as HTMLElement).dataset.index;
          if (index && entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, parseInt(index)]));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      icon: Zap,
      title: "Auto-scaling infrastructure",
      description: "Intelligent resource provisioning with automated scaling policies and predictive load management."
    },
    {
      icon: Target,
      title: "Load balancing",
      description: "Advanced traffic distribution strategies ensuring high availability and optimal performance across regions."
    },
    {
      icon: Users,
      title: "Resource optimization",
      description: "Strategic resource allocation and right-sizing for maximum efficiency and cost-effectiveness."
    },
    {
      icon: Award,
      title: "Cost management",
      description: "CloudFinOps expertise delivering significant cost reductions through intelligent resource management and optimization."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Engineering resilient systems that scale beyond expectations while driving innovation at the intersection of technology and business impact
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* My Journey Section */}
            <div
              className={`transition-all duration-700 ease-out delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative">
                My Journey
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </h3>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p className="mb-6 hover:text-gray-700 transition-all duration-300 leading-relaxed group">
                  I'm currently a DevOps Engineer and SRE at{' '}
                  <strong className="text-blue-600 hover:text-blue-700 transition-all duration-300 relative inline-block">
                    <span className="relative z-10">Clinikally, a Y-Combinator backed health-tech startup</span>
                    <span className="absolute inset-0 bg-blue-50 rounded-lg transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  </strong>
                  , where I architect robust, scalable infrastructure for India's prominent digital health platform. My expertise spans{' '}
                  <strong className="text-blue-600 hover:text-blue-700 transition-all duration-300 relative inline-block group/highlight">
                    <span className="relative z-10">CloudFinOps</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover/highlight:scale-x-100 transition-transform duration-300"></span>
                  </strong>{' '}
                  optimization, delivering significant cost efficiencies while maintaining peak performance.
                </p>

                <p className="mb-6 hover:text-gray-700 transition-all duration-300 leading-relaxed group">
                  With over{' '}
                  <span className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-semibold mx-1">
                    2+ years
                  </span>{' '}
                  of experience in cloud infrastructure, I specialize in multi-cloud environments{' '}
                  <span className="text-gray-500 font-mono text-sm bg-gray-100 px-2 py-1 rounded">(AWS & GCP)</span>
                  , Kubernetes orchestration, and advanced CI/CD automation. My approach combines technical excellence with business impact, focusing on{' '}
                  <strong className="text-blue-600 hover:text-blue-700 transition-all duration-300 relative inline-block group/security">
                    <span className="relative z-10">security-first architecture</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover/security:scale-x-100 transition-transform duration-300"></span>
                  </strong>{' '}
                  and intelligent cost optimization.
                </p>

                <p className="mb-6 hover:text-gray-700 transition-all duration-300 leading-relaxed">
                  I'm passionate about the{' '}
                  <strong className="text-blue-600 hover:text-blue-700 transition-all duration-300 relative inline-block group/automate">
                    <span className="relative z-10 font-mono bg-blue-50 px-2 py-1 rounded">"automate everything"</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-200 rounded transform scale-x-0 group-hover/automate:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </strong>{' '}
                  mindset and believe in building systems that not only work today but scale effortlessly for tomorrow. Currently pursuing opportunities to work on exciting projects as a freelancer.
                </p>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                  <p className="text-gray-700 leading-relaxed">
                    Recently earned my{' '}
                    <strong className="text-blue-600 hover:text-blue-700 transition-all duration-300 relative inline-block group/cert">
                      <span className="relative z-10">AWS Certified Cloud Practitioner certification</span>
                      <span className="absolute -inset-1 bg-yellow-200 rounded-lg transform rotate-1 scale-0 group-hover/cert:scale-100 transition-transform duration-300"></span>
                    </strong>{' '}
                    <span className="text-blue-500 font-semibold">(November 2024)</span>, validating my foundational cloud expertise and commitment to staying current with industry standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Scalable Solutions Section */}
            <div
              className={`transition-all duration-700 ease-out delay-500 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative">
                Scalable Solutions
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </h3>
              <p className="text-gray-600 mb-6 text-lg italic relative">
                <span className="relative z-10 bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent font-medium">
                  Effortless scaling with cloud automation.
                </span>
                <span className="absolute -top-1 -left-1 text-6xl text-blue-100 opacity-30 font-serif">"</span>
              </p>
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    data-index={index}
                    className={`flex items-start group transition-all duration-500 ease-out ${
                      visibleItems.has(index)
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                        <solution.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        → {solution.title}
                      </h4>
                      <p className="mt-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;