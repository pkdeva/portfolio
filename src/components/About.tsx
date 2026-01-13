import { useEffect, useRef } from 'react';
import { Users, Zap, Target, Badge, User, Layers } from 'lucide-react';

const About = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8', '-translate-x-8', 'translate-x-8');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
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
      icon: Badge,
      title: "Cost management",
      description: "CloudFinOps expertise delivering significant cost reductions through intelligent resource management and optimization."
    }
  ];

  return (
    <section id="about" className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-0">
          <div className="grid grid-cols-1 gap-10 sm:gap-16">
            {/* My Journey Section */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="mb-4 sm:mb-6">
                  <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-purple-50/50 dark:bg-gray-800/50 border-2 border-purple-300 dark:border-purple-500/50 text-purple-600 dark:text-purple-400 mr-2">
                      <User className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h2
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold relative sketch-text !text-gray-900 dark:!text-white"
                      data-text="Under the Hood"
                    >
                      Under the Hood
                    </h2>
                  </div>
                </div>
                <div className="prose prose-sm sm:prose-base lg:prose-lg text-gray-600 dark:text-gray-300 space-y-4 sm:space-y-6 sketch-content">
                  <div 
                    ref={el => itemRefs.current[1] = el}
                    className="transition-all duration-700 ease-out opacity-0"
                    style={{ transitionDelay: '300ms' }}
                  >
                    <p className="mb-4 sm:mb-6 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-500 leading-relaxed group relative text-sm sm:text-base">
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-cyan-50/20 to-blue-50/20 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 blur-xl"></span>
                      <span className="relative z-10">
                        I'm currently a DevOps Engineer and SRE at{' '}
                        <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 relative inline-block group/company">
                          <span className="relative z-10">Clinikally, a Y-Combinator backed health-tech startup</span>
                        </strong>
                        , where I architect robust, scalable infrastructure for India's prominent digital health platform. My expertise spans{' '}
                        <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 relative inline-block group/highlight">
                          <span className="relative z-10">CloudFinOps</span>
                        </strong>{' '}
                        optimization, delivering significant cost efficiencies while maintaining peak performance.
                      </span>
                    </p>
                  </div>

                  <div 
                    ref={el => itemRefs.current[2] = el}
                    className="transition-all duration-700 ease-out opacity-0"
                    style={{ transitionDelay: '400ms' }}
                  >
                    <p className="mb-4 sm:mb-6 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-500 leading-relaxed group relative text-sm sm:text-base">
                      <span className="relative z-10">
                        With over{' '}
                        <span className="inline-flex items-center px-2 py-0.5 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-800 dark:to-cyan-800 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm font-semibold mx-1 hover:from-blue-200 hover:to-cyan-200 dark:hover:from-blue-700 dark:hover:to-cyan-700 hover:shadow-lg transition-all duration-300">
                          2+ years
                        </span>{' '}
                        of experience in cloud infrastructure, I specialize in multi-cloud environments{' '}
                        <span className="text-gray-500 dark:text-gray-400 font-mono text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300">(AWS & GCP)</span>
                        , Kubernetes orchestration, and advanced CI/CD automation. My approach combines technical excellence with business impact, focusing on{' '}
                        <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 relative inline-block group/security">
                          <span className="relative z-10">security-first architecture</span>
                        </strong>{' '}
                        and intelligent cost optimization.
                      </span>
                    </p>
                  </div>

                  <div 
                    ref={el => itemRefs.current[3] = el}
                    className="transition-all duration-700 ease-out opacity-0"
                    style={{ transitionDelay: '500ms' }}
                  >
                    <p className="mb-4 sm:mb-6 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-500 leading-relaxed group relative text-sm sm:text-base">
                      <span className="relative z-10">
                        I'm passionate about the{' '}
                        <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 relative inline-block group/automate">
                          <span className="relative z-10 font-mono bg-blue-50 dark:bg-blue-900 px-2 py-0.5 rounded text-xs sm:text-sm">"automate everything"</span>
                        </strong>{' '}
                        mindset and believe in building systems that not only work today but scale effortlessly for tomorrow. Currently pursuing opportunities to work on exciting projects as a freelancer or consultant.
                      </span>
                    </p>
                  </div>

                  <div 
                    ref={el => itemRefs.current[4] = el}
                    className="p-3 sm:p-4 border-l-4 border-blue-500 dark:border-blue-400 transition-all duration-700 ease-out opacity-0 bg-blue-50/30 dark:bg-blue-900/10 rounded-r-lg"
                    style={{ transitionDelay: '600ms' }}
                  >
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300 text-sm sm:text-base">
                      Recently earned my{' '}
                      <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300">
                        AWS Certified Cloud Practitioner certification
                      </strong>{' '}
                      <span className="text-blue-500 dark:text-blue-400 font-semibold">(November 2024)</span>, validating my foundational cloud expertise and commitment to staying current with industry standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What I Build Section */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div 
                  ref={el => itemRefs.current[5] = el}
                  className="relative transition-all duration-700 ease-out opacity-0 mb-4 sm:mb-6"
                  style={{ transitionDelay: '300ms' }}
                >
                  <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                    <Layers className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-500 dark:text-purple-400" />
                    <h2
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold relative sketch-text !text-gray-900 dark:!text-white"
                      data-text="What I Build?"
                    >
                      What I Build?
                    </h2>
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                  {solutions.map((solution, index) => (
                    <div
                      key={index}
                      ref={(el) => (itemRefs.current[7 + index] = el)}
                      className={`flex items-start group transition-all duration-500 ease-out opacity-0`}
                      style={{ transitionDelay: `${500 + index * 100}ms` }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-purple-50/50 dark:bg-gray-800/50 border-2 border-purple-300 dark:border-purple-500/50 text-purple-600 dark:text-purple-400">
                          <solution.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center">
                          <span className="text-purple-600 dark:text-purple-400 mr-2">→</span>
                          {solution.title}
                        </h4>
                        <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;