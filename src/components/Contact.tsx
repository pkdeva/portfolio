import React, { useState, useEffect, useRef } from 'react';
import useWeb3forms from '@web3forms/react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, Twitter } from 'lucide-react';

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
      <section id="contact" ref={sectionRef} className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 select-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-700 select-text ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300 select-text">
              Let's Work Together
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300 select-text">
              Ready to optimize your infrastructure? Let's discuss your project requirements.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div 
              ref={el => itemRefs.current[0] = el}
              data-index="0"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-all duration-500 opacity-100 translate-y-0 select-text"
              style={{ transitionDelay: '100ms' }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300 select-text">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300 select-text">
                I'm currently available for freelance DevOps and SRE projects. Whether you need 
                cloud migration, infrastructure optimization, or CI/CD implementation, I'd love to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300">Email</p>
                    <a href="mailto:priyanshu.txt@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                      priyanshu.txt[at]gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300">Location</p>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Gurugram, Haryana, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Connect with me</h4>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="https://github.com/pkdeva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-600"
                  >
                    <Github className="h-8 w-8 mb-2" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/pkdeva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-600"
                  >
                    <Linkedin className="h-8 w-8 mb-2" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com/pkdevaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-gray-600 dark:text-gray-300 hover:text-blue-400 border border-gray-200 dark:border-gray-600"
                  >
                    <Twitter className="h-8 w-8 mb-2" />
                    <span className="text-sm font-medium">Twitter</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              id="contact-form"
              ref={el => itemRefs.current[1] = el}
              data-index="1"
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/50 transition-all duration-500 opacity-100 translate-y-0 select-text"
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Send a Message</h3>
              
              {submitResult.success ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-300">Message Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Tell me about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Availability Notice */}
          <div 
            ref={el => itemRefs.current[2] = el}
            data-index="2"
            className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 text-center transition-all duration-500 opacity-0 translate-y-10"
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 transition-colors duration-300">
              🚀 Available for New Projects
            </h3>
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-6 transition-colors duration-300">
              I'm currently accepting new freelance projects and consulting opportunities.
              Let's build something amazing together!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white dark:bg-blue-800/30 rounded-lg p-4 transition-colors duration-300">
                <div className="font-semibold text-blue-900 dark:text-blue-100 transition-colors duration-300">Response Time</div>
                <div className="text-blue-700 dark:text-blue-200 transition-colors duration-300">Within 24 hours</div>
              </div>
              <div className="bg-white dark:bg-blue-800/30 rounded-lg p-4 transition-colors duration-300">
                <div className="font-semibold text-blue-900 dark:text-blue-100 transition-colors duration-300">Project Start</div>
                <div className="text-blue-700 dark:text-blue-200 transition-colors duration-300">Available immediately</div>
              </div>
              <div className="bg-white dark:bg-blue-800/30 rounded-lg p-4 transition-colors duration-300">
                <div className="font-semibold text-blue-900 dark:text-blue-100 transition-colors duration-300">Communication</div>
                <div className="text-blue-700 dark:text-blue-200 transition-colors duration-300">Slack, Email, Video calls</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;