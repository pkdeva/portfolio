import React, { useState, useEffect, useRef } from 'react';
import useWeb3forms from '@web3forms/react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

// Custom X Icon
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success?: boolean; message?: string }>({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { submit } = useWeb3forms({
    access_key: "39716599-07e6-4701-a5f1-40c441460122",
    settings: {
      from_name: "Portfolio Contact Form",
      subject: "New Contact Form Submission from Portfolio",
    },
    onSuccess: (msg: string) => {
      setSubmitResult({ success: true, message: msg });
      setIsSubmitting(false);
    },
    onError: (msg: string) => {
      setSubmitResult({ success: false, message: msg });
      setIsSubmitting(false);
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult({});

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    await submit(data);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            }
            const index = (entry.target as HTMLElement).dataset.index;
            if (index) {
              itemRefs.current[parseInt(index)]?.classList.remove('opacity-0', 'translate-y-10');
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Let's Work Together
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Ready to optimize your infrastructure? Let's discuss your project.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact Info - 40% on desktop */}
          <div 
            ref={el => itemRefs.current[0] = el}
            data-index="0"
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 transition-all duration-500 opacity-0 translate-y-10 border border-gray-200 dark:border-gray-700"
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">Get In Touch</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 transition-colors duration-300">
              I'm available for freelance DevOps and SRE projects. Whether you need 
              cloud migration, infrastructure optimization, or CI/CD implementation, I'd love to help.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">Email</p>
                  <a href="mailto:priyanshu.txt@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors break-all">
                    priyanshu.txt[at]gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Gurugram, Haryana, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Connect with me</h4>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/pkdeva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all text-gray-600 dark:text-gray-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/pkdeva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-all text-blue-600 dark:text-blue-400"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/pkdevaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all text-gray-600 dark:text-gray-300"
                >
                  <XIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - 60% on desktop */}
          <div 
            id="contact-form"
            ref={el => itemRefs.current[1] = el}
            data-index="1"
            className="lg:col-span-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 shadow-lg dark:shadow-gray-900/50 transition-all duration-500 opacity-0 translate-y-10"
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Send a Message</h3>
            
            {submitResult.success ? (
              <div className="text-center py-8 sm:py-10">
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mx-auto mb-3" />
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-300">Message Sent!</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                    placeholder="Tell me about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-4 py-2.5 sm:py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Availability Notice */}
        <div 
          ref={el => itemRefs.current[2] = el}
          data-index="2"
          className="mt-10 sm:mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 sm:p-6 text-center transition-all duration-500 opacity-0 translate-y-10 border border-blue-200/50 dark:border-blue-700/50"
          style={{ transitionDelay: '300ms' }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-100 mb-2 sm:mb-3 transition-colors duration-300">
            🚀 Available for New Projects
          </h3>
          <p className="text-sm sm:text-base text-blue-800 dark:text-blue-200 mb-4 sm:mb-6 transition-colors duration-300">
            I'm currently accepting new freelance projects and consulting opportunities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="bg-white dark:bg-blue-800/30 rounded-lg p-3 transition-colors duration-300">
              <div className="font-semibold text-blue-900 dark:text-blue-100 transition-colors duration-300">Response Time</div>
              <div className="text-blue-700 dark:text-blue-200 transition-colors duration-300">Within 24 hours</div>
            </div>
            <div className="bg-white dark:bg-blue-800/30 rounded-lg p-3 transition-colors duration-300">
              <div className="font-semibold text-blue-900 dark:text-blue-100 transition-colors duration-300">Project Start</div>
              <div className="text-blue-700 dark:text-blue-200 transition-colors duration-300">Available immediately</div>
            </div>
            <div className="bg-white dark:bg-blue-800/30 rounded-lg p-3 transition-colors duration-300">
              <div className="font-semibold text-blue-900 dark:text-blue-100 transition-colors duration-300">Communication</div>
              <div className="text-blue-700 dark:text-blue-200 transition-colors duration-300">Slack, Email, Calls</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;