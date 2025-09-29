import React from 'react';
import { Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Horizontal Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-8 lg:space-y-0">

            {/* Left Content */}
            <div className="flex-1">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Available for Freelance
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl lg:text-6xl mb-2">
                <span className="block text-gray-600 text-lg font-normal mb-2">Hi, I'm</span>
                <span className="block mb-4">Priyanshu Kumar</span>
                <span className="block text-blue-600 text-3xl sm:text-4xl lg:text-5xl">DevOps Engineer & SRE Catalyst.</span>
              </h1>

              <p className="mt-6 text-xl text-gray-500 max-w-2xl">
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
                    Hit Me Up
                    <Mail className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="/resume.pdf"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    Get My CV
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

            {/* Right Profile Section */}
            <div className="flex-shrink-0">
              <div className="text-center">
                {/* Profile Picture */}
                <div className="relative mx-auto w-56 h-56 mb-6">
                  <img
                    src="/profile.png"
                    alt="Priyanshu Kumar."
                    className="w-full h-full rounded-full object-cover border-4 border-blue-100 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Experience */}
                <div className="max-w-xs mx-auto">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">2+</div>
                    <div className="text-sm text-gray-600">Years of Experience</div>
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