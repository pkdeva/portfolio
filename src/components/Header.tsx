import React, { useState, useEffect } from 'react';
import { Menu, X, Cloud, Sun, Moon, Mail, Home, User, Briefcase, Code, FolderOpen, MessageCircle } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Right Navigation - Only show when scrolled */}
      {isScrolled && (
        <div className="fixed top-6 right-6 z-40 transition-all duration-500 ease-out transform">
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-3 animate-slideInRight">
            {/* Vertical Navigation Icons */}
            <div className="flex flex-col space-y-3">
              <a href="#home" className="w-12 h-12 text-green-500 hover:text-green-400 hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center group" title="Home">
                <Home className="w-5 h-5" />
              </a>
              <a href="#about" className="w-12 h-12 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center group" title="About">
                <User className="w-5 h-5" />
              </a>
              <a href="#experience" className="w-12 h-12 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center group" title="Experience">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="#skills" className="w-12 h-12 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center group" title="Skills">
                <Code className="w-5 h-5" />
              </a>
              <a href="#projects" className="w-12 h-12 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center group" title="Projects">
                <FolderOpen className="w-5 h-5" />
              </a>
              <a href="#contact" className="w-12 h-12 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center group" title="Contact">
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Dark Mode Toggle */}
              <div className="border-t border-gray-700/50 pt-3 mt-3">
                <button
                  onClick={toggleDarkMode}
                  className="w-12 h-12 rounded-xl bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 flex items-center justify-center border border-gray-600"
                  aria-label="Toggle dark mode"
                >
                  <div className="relative w-5 h-5">
                    <Sun className={`absolute inset-0 h-5 w-5 text-yellow-500 transition-all duration-300 ${isDarkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                    <Moon className={`absolute inset-0 h-5 w-5 text-blue-400 transition-all duration-300 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Centered Navigation Menu - Show when not scrolled */}
      {!isScrolled && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out">
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl p-3">
            <div className="flex items-center space-x-3">
              <a href="#home" className="w-12 h-12 text-green-500 hover:text-green-400 hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center group" title="Home">
                <Home className="w-5 h-5" />
              </a>
              <a href="#about" className="w-12 h-12 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center group" title="About">
                <User className="w-5 h-5" />
              </a>
              <a href="#experience" className="w-12 h-12 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center group" title="Experience">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="#skills" className="w-12 h-12 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center group" title="Skills">
                <Code className="w-5 h-5" />
              </a>
              <a href="#projects" className="w-12 h-12 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center group" title="Projects">
                <FolderOpen className="w-5 h-5" />
              </a>
              <a href="#contact" className="w-12 h-12 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center group" title="Contact">
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Separator */}
              <div className="w-px h-8 bg-gray-600 mx-2"></div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="w-12 h-12 rounded-xl bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 flex items-center justify-center border border-gray-600"
                aria-label="Toggle dark mode"
              >
                <div className="relative w-5 h-5">
                  <Sun className={`absolute inset-0 h-5 w-5 text-yellow-500 transition-all duration-300 ${isDarkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                  <Moon className={`absolute inset-0 h-5 w-5 text-blue-400 transition-all duration-300 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Original Header - Fade out when scrolled */}
    <header className={`fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-50 shadow-sm backdrop-blur-md bg-white/95 dark:bg-gray-900/95 transition-opacity duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-0 pointer-events-none'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Cloud className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Priyanshu K.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Experience
              </a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Dark Mode Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
              aria-label="Toggle dark mode"
            >
              <div className="relative w-5 h-5">
                <Sun className={`absolute inset-0 h-5 w-5 text-yellow-500 transition-all duration-300 ${isDarkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                <Moon className={`absolute inset-0 h-5 w-5 text-blue-400 transition-all duration-300 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
              </div>
            </button>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button & dark toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              <div className="relative w-5 h-5">
                <Sun className={`absolute inset-0 h-5 w-5 text-yellow-500 transition-all duration-300 ${isDarkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                <Moon className={`absolute inset-0 h-5 w-5 text-blue-400 transition-all duration-300 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
              </div>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
              <a href="#home" className="text-gray-900 dark:text-white block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium transition-colors">About</a>
              <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium transition-colors">Experience</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium transition-colors">Contact</a>
              <a href="#contact" className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4 transition-colors">Hire Me</a>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
};

export default Header;