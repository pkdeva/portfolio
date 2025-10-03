import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); // Trigger when scrolled past hero section
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Profile Card - Only show when scrolled */}
      {isScrolled && (
        <div className="fixed top-6 left-6 z-40 w-80 transition-all duration-500 ease-out transform">
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl p-8 transform animate-slideInLeft">
            {/* Brand Header */}
            <div className="text-left mb-6">
              <h2 className="text-3xl font-bold text-white mb-1">Priyanshu K. ®</h2>
              <p className="text-green-400 text-base font-medium">DevOps Engineer</p>
              <p className="text-green-400 text-base font-medium">& SRE Catalyst</p>
            </div>

            {/* Large Profile Image */}
            <div className="mb-8">
              <div className="relative w-48 h-48 mx-auto">
                <img
                  src="/profile.png"
                  alt="Priyanshu Kumar"
                  className="w-full h-full rounded-3xl object-cover"
                />
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900"></div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center mb-6">
              <p className="text-white text-lg font-medium mb-2">priyanshu.txt@gmail.com</p>
              <p className="text-gray-400 text-base">Based in Gurugram, Haryana, India</p>
            </div>

            {/* Copyright */}
            <div className="text-center mb-8">
              <p className="text-gray-500 text-sm">© 2024 Priyanshu Kumar. All Rights Reserved</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-8">
              <a href="https://github.com/pkdeva" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors border border-gray-600">
                <Github className="h-6 w-6 text-gray-300" />
              </a>
              <a href="https://linkedin.com/in/pkdeva" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors border border-gray-600">
                <Linkedin className="h-6 w-6 text-gray-300" />
              </a>
              <a href="#contact" className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors border border-gray-600">
                <Mail className="h-6 w-6 text-gray-300" />
              </a>
            </div>

            {/* Hire Me Button */}
            <a href="#contact" className="block w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-6 rounded-full transition-colors duration-300 text-base text-center">
              📧 HIRE ME!
            </a>
          </div>
        </div>
      )}

      {/* Original Hero Section */}
    <section id="home" className="relative bg-white dark:bg-gray-900 pt-24 pb-16 sm:pt-32 sm:pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Horizontal Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 p-8 lg:p-12 transition-colors duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-8 lg:space-y-0">

            {/* Left Content */}
            <div className="flex-1">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 transition-colors duration-300">
                  Available for Freelance
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight sm:text-5xl lg:text-6xl mb-2 transition-colors duration-300">
                <span className="block text-gray-600 dark:text-gray-300 text-lg font-normal mb-2 transition-colors duration-300">Hi, I'm</span>
                <span className="block mb-4">Priyanshu Kumar</span>
                <span className="block text-blue-600 dark:text-blue-400 text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300">DevOps Engineer & SRE Catalyst.</span>
              </h1>

              <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-2xl transition-colors duration-300">
                Building resilient cloud infrastructure at Y-Combinator backed health-tech startup.
                Expertise in AWS, GCP, Kubernetes, and CI/CD automation. Passionate about reliability engineering
                and aligning technology with business impact.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="flex space-x-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                  >
                    Hit Me Up
                    <Mail className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="/PK DevOps CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    Get My CV
                    <Download className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-8 flex space-x-6">
                <a href="https://github.com/pkdeva" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
                <a href="https://linkedin.com/in/pkdeva" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
                <a href="#contact" className="group relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-green-600 dark:hover:bg-green-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                  <span className="sr-only">Contact</span>
                  <Mail className="h-6 w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </div>
            </div>

            {/* Right Profile Section */}
            <div className="flex-shrink-0">
              <div className="text-center">
                {/* Profile Picture */}
                <div className="relative mx-auto w-56 h-56 mb-6">
                  <img
                    src="/profile.png"
                    alt="Priyanshu Kumar."
                    className="w-full h-full rounded-full object-cover border-4 border-blue-100 dark:border-blue-900 shadow-lg transition-colors duration-300"
                  />
                  {/* LinkedIn-style Online Indicator */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg transition-colors duration-300">
                    <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Experience */}
                <div className="max-w-xs mx-auto">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center transition-colors duration-300">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">2+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Years of Experience</div>
                  </div>
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