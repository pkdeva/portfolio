import { useState, useEffect, useRef } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [iconsLoaded, setIconsLoaded] = useState(false);
  const [heroStyle, setHeroStyle] = useState({ opacity: 1, transform: 'translateY(0px)' });
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);

      // Only apply parallax on desktop
      if (window.innerWidth >= 1024) {
        const heroHeight = window.innerHeight;
        if (scrollPosition < heroHeight) {
          const progress = scrollPosition / heroHeight;
          const opacity = 1 - progress * 2;
          const translateY = -scrollPosition / 2;
          const scale = 1 - progress * 0.3;
          setHeroStyle({
            opacity: Math.max(0, opacity),
            transform: `translateY(${translateY}px) scale(${scale})`,
          });
        } else {
          setHeroStyle({ opacity: 0, transform: `translateY(-${heroHeight / 2}px) scale(0.7)` });
        }
      } else {
        // Mobile: no parallax effects
        setHeroStyle({ opacity: 1, transform: 'translateY(0)' });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIconsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Sticky Profile Card - Only show when scrolled - DESKTOP ONLY */}
      {isScrolled && (
        <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 left-6 z-40 transition-all duration-500 ease-out transform">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl p-8 transform animate-slideInLeft transition-colors duration-300 w-80">
            {/* Brand Header */}
            <div className="flex justify-center items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300 text-center">Priyanshu K.</h2>
              </div>
            </div>

            {/* Profile Image */}
            <div className="mb-6">
              <div className="relative w-44 h-44 mx-auto">
                <img
                  src="/cropped-profile.png"
                  alt="Priyanshu Kumar"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center mb-8">
              <p className="text-blue-600 dark:text-blue-400 text-base font-medium mb-2 transition-colors duration-300">DevOps Engineer & SRE Catalyst</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">Based in Gurgaon, NCR, India</p>
            </div>

            {/* Social Links */}
            <div className={`flex justify-center space-x-4 mb-8 transition-opacity transform duration-700 ease-in-out ${iconsLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <a href="https://github.com/pkdeva" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors border border-gray-200 dark:border-gray-600">
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a href="https://linkedin.com/in/pkdeva" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors border border-gray-200 dark:border-gray-600">
                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a href="#contact" className="w-12 h-12 bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors border border-gray-200 dark:border-gray-600">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </a>
            </div>

            {/* Hire Me Button */}
            <a href="#contact" className="block w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-300 text-base text-center">
              📧 HIRE ME!
            </a>
          </div>
        </div>
      )}

      {/* Hero Section - Mobile: relative, Desktop: sticky */}
      <section id="home" className="relative lg:sticky lg:top-0 bg-transparent min-h-screen flex items-center justify-center transition-colors duration-300 overflow-hidden px-4 sm:px-6">
        <div 
          ref={heroContentRef}
          style={typeof window !== 'undefined' && window.innerWidth >= 1024 ? heroStyle : undefined}
          className="w-full max-w-7xl mx-auto py-20 sm:py-0"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-16 xl:space-x-24">
            {/* Left Content */}
            <div className="flex-1 w-full">
              <div className="mb-4 sm:mb-6 text-center lg:text-left">
                <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 transition-colors duration-300">
                  Open for Consulting & Freelance Projects
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-4 transition-colors duration-300 text-center lg:text-left leading-tight">
                <span className="block text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-2 transition-colors duration-300">Hi, I'm</span>
                <span className="block mb-2">Priyanshu Kumar</span>
                <span className="block text-blue-600 dark:text-blue-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl transition-colors duration-300">DevOps Engineer & SRE Catalyst.</span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-3xl transition-colors duration-300 text-center lg:text-left mx-auto lg:mx-0">
                I build resilient cloud infrastructure that scales with purpose.
                Currently driving reliability at a Y-Combinator backed health-tech startup, aligning engineering
                excellence with real business outcomes.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => {
                    const contactForm = document.getElementById('contact-form');
                    if (contactForm) {
                      const yOffset = -80;
                      const y = contactForm.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    } else {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                      });
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  Hit Me Up
                  <Mail className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <a
                  href="/PK DevOps CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-sm sm:text-base font-medium rounded-xl text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  Get My CV
                  <Download className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>

              <div className="mt-6 sm:mt-8 flex space-x-3 sm:space-x-4 justify-center lg:justify-start">
                <a href="https://github.com/pkdeva" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
                <a href="https://linkedin.com/in/pkdeva" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
                <a href="#contact" className="group relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-green-600 dark:hover:bg-green-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                  <span className="sr-only">Contact</span>
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </div>
            </div>

            {/* Right Profile Section - DESKTOP ONLY */}
            <div className="flex-shrink-0 hidden lg:block">
              <div className="text-center">
                {/* Profile Picture */}
                <div className="relative mx-auto w-64 h-64 xl:w-80 xl:h-80 mb-8">
                  <img
                    src="/profile.png"
                    alt="Priyanshu Kumar."
                    className="w-full h-full rounded-full object-cover border-4 border-blue-100 dark:border-blue-900 shadow-2xl transition-colors duration-300"
                  />
                  {/* LinkedIn-style Online Indicator */}
                  <div className="absolute bottom-5 right-5 w-8 h-8 xl:w-10 xl:h-10 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg transition-colors duration-300">
                    <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Experience */}
                <div className="max-w-xs mx-auto">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center transition-colors duration-300">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">2+</div>
                    <div className="text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">Years of Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;