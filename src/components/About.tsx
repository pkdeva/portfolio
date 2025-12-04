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
    <section id="about" className="relative pt-0 sm:pt-0 pb-20 sm:pb-28 overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="mt-0">
          <div className="grid grid-cols-1 gap-16">
            {/* My Journey Section */}
            <div className="space-y-8">
              <div>
                <div className="mb-8">
                  <div className="inline-flex items-center px-6 py-3 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-50/50 dark:bg-gray-800/50 border-2 border-purple-300 dark:border-purple-500/50 text-purple-600 dark:text-purple-400 mr-3">
                      <User className="h-6 w-6" />
                    </div>
                    <h2
                      className="text-4xl sm:text-5xl font-bold relative sketch-text !text-gray-900 dark:!text-white"
                      data-text="Under the Hood"
                    >
                      Under the Hood
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-6 sketch-content">
                  <div 
                    ref={el => itemRefs.current[1] = el}
                    className="transition-all duration-700 ease-out opacity-0"
                    style={{ transitionDelay: '300ms' }}
                  >
                    <p className="mb-6 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-500 leading-relaxed group relative">
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-cyan-50/20 to-blue-50/20 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 blur-xl"></span>
                      <span className="relative z-10">
                        I'm currently a DevOps Engineer and SRE at{' '}
                        <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 relative inline-block group/company">
                          <span className="relative z-10">Clinikally, a Y-Combinator backed health-tech startup</span>
                          <span className="absolute inset-0 bg-gradient-to-r from-blue-100/60 to-cyan-100/60 dark:from-blue-800/60 dark:to-cyan-800/60 backdrop-blur-sm transform scale-105 opacity-0 group-hover/company:opacity-100 transition-all duration-500"></span>
                          <span className="absolute inset-0 bg-white/20 dark:bg-gray-600/20 transform scale-110 opacity-0 group-hover/company:opacity-100 transition-all duration-700 blur-sm"></span>
                        </strong>
                        , where I architect robust, scalable infrastructure for India's prominent digital health platform. My expertise spans{' '}
                        <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 relative inline-block group/highlight">
                          <span className="relative z-10">CloudFinOps</span>
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover/highlight:scale-x-100 transition-transform duration-500"></span>
                          <span className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 dark:from-blue-700/30 dark:to-cyan-700/30 transform scale-0 group-hover/highlight:scale-150 transition-all duration-700 blur-lg opacity-60"></span>
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
                    <p className="mb-6 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-500 leading-relaxed group relative">
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
                          <span className="absolute inset-0 bg-gradient-to-r from-purple-200/40 to-blue-200/40 dark:from-purple-700/40 dark:to-blue-700/40 transform scale-0 group-hover/security:scale-150 transition-all duration-700 blur-lg opacity-60"></span>
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
                    <p className="mb-6 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-500 leading-relaxed group relative">
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-50/20 via-blue-50/20 to-purple-50/20 dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105 blur-xl"></span>
                      <span className="relative z-10">
                        I'm passionate about the{' '}
                        <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-500 relative inline-block group/automate">
                          <span className="relative z-10 font-mono bg-blue-50 dark:bg-blue-900 px-2 py-1 rounded">"automate everything"</span>
                          <span className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 dark:from-blue-700/50 dark:to-cyan-700/50 rounded backdrop-blur-sm transform scale-x-0 group-hover/automate:scale-x-100 transition-transform duration-500 origin-left"></span>
                          <span className="absolute inset-0 bg-white/30 dark:bg-gray-600/30 transform scale-0 group-hover/automate:scale-150 transition-all duration-700 blur-md opacity-60"></span>
                        </strong>{' '}
                        mindset and believe in building systems that not only work today but scale effortlessly for tomorrow. Currently pursuing opportunities to work on exciting projects as a freelancer or consultant.
                      </span>
                    </p>
                  </div>

                  <div 
                    ref={el => itemRefs.current[4] = el}
                    className="p-4 border-l-4 border-blue-500 dark:border-blue-400 transition-all duration-700 ease-out opacity-0"
                    style={{ transitionDelay: '600ms' }}
                  >
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      Recently earned my{' '}
                      <strong className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 relative inline-block group/cert">
                        <span className="relative z-10">AWS Certified Cloud Practitioner certification</span>
                        <span className="absolute -inset-1 bg-yellow-200 transform rotate-1 scale-0 group-hover/cert:scale-100 transition-transform duration-300"></span>
                      </strong>{' '}
                      <span className="text-blue-500 dark:text-blue-400 font-semibold">(November 2024)</span>, validating my foundational cloud expertise and commitment to staying current with industry standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What I Build Section */}
            <div className="space-y-8">
              <div>
                <div 
                  ref={el => itemRefs.current[5] = el}
                  className="relative transition-all duration-700 ease-out opacity-0 mb-8"
                  style={{ transitionDelay: '300ms' }}
                >
                  <div className="inline-flex items-center px-6 py-3 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                    <Layers className="h-6 w-6 mr-3 text-purple-500 dark:text-purple-400" />
                    <h2
                      className="text-4xl sm:text-5xl font-bold relative sketch-text !text-gray-900 dark:!text-white"
                      data-text="What I Build?"
                    >
                      What I Build?
                    </h2>
                  </div>
                </div>
                <div className="space-y-8 mt-8">
                  {solutions.map((solution, index) => (
                    <div
                      key={index}
                      ref={(el) => (itemRefs.current[7 + index] = el)}
                      className={`flex items-start group transition-all duration-500 ease-out opacity-0`}
                      style={{ transitionDelay: `${500 + index * 100}ms` }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-50/50 dark:bg-gray-800/50 border-2 border-purple-300 dark:border-purple-500/50 text-purple-600 dark:text-purple-400">
                          <solution.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                          <span className="text-purple-600 dark:text-purple-400 mr-2">→</span>
                          {solution.title}
                        </h4>
                        <p className="mt-1 text-base text-gray-600 dark:text-gray-400">{solution.description}</p>
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