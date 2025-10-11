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
    <section id="about" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
            About Me
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
            I architect, automate and accelerate cloud platforms that enable scale, resilience, and measurable business outcomes.
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative transition-colors duration-300">
                My Journey
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </h3>
              <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-6">
                <p className="mb-6 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-500 leading-relaxed group relative overflow-hidden rounded-xl p-4 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:backdrop-blur-sm hover:shadow-xl dark:hover:shadow-gray-900/50">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-cyan-50/20 to-blue-50/20 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 blur-xl"></span>
                  <span className="relative z-10">
                    I'm currently a DevOps Engineer and SRE at{' '}
                    <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 relative inline-block group/company">
                      <span className="relative z-10">Clinikally, a Y-Combinator backed health-tech startup</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-100/60 to-cyan-100/60 dark:from-blue-800/60 dark:to-cyan-800/60 rounded-lg backdrop-blur-sm transform scale-105 opacity-0 group-hover/company:opacity-100 transition-all duration-500"></span>
                      <span className="absolute inset-0 bg-white/20 dark:bg-gray-600/20 rounded-lg transform scale-110 opacity-0 group-hover/company:opacity-100 transition-all duration-700 blur-sm"></span>
                    </strong>
                    , where I architect robust, scalable infrastructure for India's prominent digital health platform. My expertise spans{' '}
                    <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 relative inline-block group/highlight">
                      <span className="relative z-10">CloudFinOps</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover/highlight:scale-x-100 transition-transform duration-500"></span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 dark:from-blue-700/30 dark:to-cyan-700/30 rounded transform scale-0 group-hover/highlight:scale-150 transition-all duration-700 blur-lg opacity-60"></span>
                    </strong>{' '}
                    optimization, delivering significant cost efficiencies while maintaining peak performance.
                  </span>
                </p>

                <p className="mb-6 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-500 leading-relaxed group relative overflow-hidden rounded-xl p-4 hover:bg-white/40 dark:hover:bg-gray-800/40 hover:backdrop-blur-sm hover:shadow-lg dark:hover:shadow-gray-900/50">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-50/20 via-blue-50/20 to-cyan-50/20 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105 blur-xl"></span>
                  <span className="relative z-10">
                    With over{' '}
                    <span className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-800 dark:to-cyan-800 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold mx-1 hover:from-blue-200 hover:to-cyan-200 dark:hover:from-blue-700 dark:hover:to-cyan-700 hover:shadow-lg transition-all duration-300">
                      2+ years
                    </span>{' '}
                    of experience in cloud infrastructure, I specialize in multi-cloud environments{' '}
                    <span className="text-gray-500 dark:text-gray-400 font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300">(AWS & GCP)</span>
                    , Kubernetes orchestration, and advanced CI/CD automation. My approach combines technical excellence with business impact, focusing on{' '}
                    <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 relative inline-block group/security">
                      <span className="relative z-10">security-first architecture</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover/security:scale-x-100 transition-transform duration-500"></span>
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-200/40 to-blue-200/40 dark:from-purple-700/40 dark:to-blue-700/40 rounded transform scale-0 group-hover/security:scale-150 transition-all duration-700 blur-lg opacity-60"></span>
                    </strong>{' '}
                    and intelligent cost optimization.
                  </span>
                </p>

                <p className="mb-6 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-500 leading-relaxed group relative overflow-hidden rounded-xl p-4 hover:bg-white/30 dark:hover:bg-gray-800/30 hover:backdrop-blur-sm hover:shadow-md dark:hover:shadow-gray-900/50">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-50/20 via-blue-50/20 to-purple-50/20 dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105 blur-xl"></span>
                  <span className="relative z-10">
                    I'm passionate about the{' '}
                    <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 relative inline-block group/automate">
                      <span className="relative z-10 font-mono bg-blue-50 dark:bg-blue-900 px-2 py-1 rounded">"automate everything"</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 dark:from-blue-700/50 dark:to-cyan-700/50 rounded backdrop-blur-sm transform scale-x-0 group-hover/automate:scale-x-100 transition-transform duration-500 origin-left"></span>
                      <span className="absolute inset-0 bg-white/30 dark:bg-gray-600/30 rounded transform scale-0 group-hover/automate:scale-150 transition-all duration-700 blur-md opacity-60"></span>
                    </strong>{' '}
                    mindset and believe in building systems that not only work today but scale effortlessly for tomorrow. Currently pursuing opportunities to work on exciting projects as a freelancer.
                  </span>
                </p>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-xl border-l-4 border-blue-500 dark:border-blue-400 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-800/60 dark:hover:to-cyan-800/60 transition-all duration-300">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    Recently earned my{' '}
                    <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 relative inline-block group/cert">
                      <span className="relative z-10">AWS Certified Cloud Practitioner certification</span>
                      <span className="absolute -inset-1 bg-yellow-200 rounded-lg transform rotate-1 scale-0 group-hover/cert:scale-100 transition-transform duration-300"></span>
                    </strong>{' '}
                    <span className="text-blue-500 dark:text-blue-400 font-semibold">(November 2024)</span>, validating my foundational cloud expertise and commitment to staying current with industry standards.
                  </p>
                </div>
              </div>
            </div>

            {/* What I Build Section */}
            <div
              className={`transition-all duration-700 ease-out delay-500 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            >
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative group transition-colors duration-300">
                  <span className="relative z-10">What I Build</span>
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:w-32 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-blue-100/20 dark:from-purple-800/20 dark:to-blue-800/20 rounded-lg transform scale-0 group-hover:scale-110 transition-all duration-700 blur-xl opacity-0 group-hover:opacity-100"></div>
                </h3>

                <div className="relative mb-8 p-6 rounded-2xl bg-gradient-to-r from-purple-50/50 via-blue-50/50 to-cyan-50/50 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-cyan-900/30 border border-purple-100/30 dark:border-purple-700/30 backdrop-blur-sm hover:from-purple-100/60 hover:via-blue-100/60 hover:to-cyan-100/60 dark:hover:from-purple-800/50 dark:hover:via-blue-800/50 dark:hover:to-cyan-800/50 transition-all duration-700 group">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-200/10 via-blue-200/10 to-cyan-200/10 dark:from-purple-700/20 dark:via-blue-700/20 dark:to-cyan-700/20 rounded-2xl transform scale-95 group-hover:scale-105 transition-all duration-700 blur-lg"></span>
                  <p className="text-lg italic relative z-10">
                    <span className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent font-medium">
                      "Effortless scaling with cloud automation."
                    </span>
                    <span className="absolute -top-6 -left-4 text-8xl text-purple-100/40 dark:text-purple-800/40 font-serif transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">"</span>
                    <span className="absolute -bottom-6 -right-4 text-8xl text-blue-100/40 dark:text-blue-800/40 font-serif transform rotate-180 group-hover:scale-110 group-hover:-rotate-168 transition-all duration-700">"</span>
                  </p>
                </div>
              </div>
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
                    <div className="flex-shrink-0 relative">
                      <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-white group-hover:from-purple-500 group-hover:to-blue-600 dark:group-hover:from-purple-400 dark:group-hover:to-blue-500 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl dark:shadow-gray-900/50 relative overflow-hidden">
                        <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></span>
                        <span className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 rounded-2xl transform group-hover:scale-110 transition-transform duration-700"></span>
                        <solution.icon className="h-7 w-7 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                        <span className="absolute inset-0 bg-white/20 rounded-2xl transform scale-0 group-hover:scale-150 transition-all duration-700 blur-lg opacity-0 group-hover:opacity-100"></span>
                      </div>
                    </div>
                    <div className="ml-6 flex-1 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-800/30 dark:to-purple-800/30 rounded-xl transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 backdrop-blur-sm"></div>
                      <div className="relative z-10 p-3">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 mb-2">
                          → {solution.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-500 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
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