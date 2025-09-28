import React from 'react';
import { Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Available for Freelance
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block">DevOps Engineer</span>
              <span className="block text-blue-600">& SRE Specialist</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-500 sm:max-w-3xl">
              Building resilient cloud infrastructure at Y-Combinator backed health-tech startup. 
              Expertise in AWS, GCP, Kubernetes, and CI/CD automation. Passionate about reliability engineering 
              and aligning technology with business impact.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get In Touch
                  <Mail className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Download CV
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 flex space-x-6">
              <a href="https://github.com/pkdeva" className="text-gray-400 hover:text-gray-500 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/pkdeva" className="text-gray-400 hover:text-gray-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:priyanshu.txt@gmail.com" className="text-gray-400 hover:text-gray-500 transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-center h-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
                    <div className="text-center text-white">
                      <div className="text-6xl font-bold mb-2">2+</div>
                      <div className="text-xl">Years Experience</div>
                      <div className="mt-4 text-sm opacity-90">DevOps & SRE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;