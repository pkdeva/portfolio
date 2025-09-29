import React, { useState } from 'react';
import { Menu, X, Cloud, Server, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Cloud className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">Priyanshu K.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Experience
              </a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-50 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a href="#home" className="text-gray-900 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">About</a>
              <a href="#experience" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Experience</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Contact</a>
              <a href="#contact" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4">Hire Me</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;