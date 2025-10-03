import React from 'react';
import { Cloud, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-lg transition-colors duration-300">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Priyanshu Kumar</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4 max-w-md transition-colors duration-300">
              DevOps Engineer & SRE specialist building scalable cloud infrastructure.
              Currently at Y-Combinator backed health-tech startup, available for freelance projects.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/pkdeva" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/pkdeva" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:priyanshu.txt@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Experience</a></li>
              <li><a href="#skills" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors duration-300">
              <li>Cloud Migration</li>
              <li>Infrastructure Automation</li>
              <li>CI/CD Implementation</li>
              <li>Kubernetes Consulting</li>
              <li>Performance Optimization</li>
              <li>SRE Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-300">
          <div className="text-gray-400 dark:text-gray-500 text-sm transition-colors duration-300">
            © {new Date().getFullYear()} Priyanshu Kumar. All rights reserved.
          </div>
          <div className="flex items-center text-gray-400 dark:text-gray-500 text-sm mt-4 md:mt-0 transition-colors duration-300">
            <span>Built with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;