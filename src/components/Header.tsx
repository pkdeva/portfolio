import { useState, useEffect } from 'react';
import { Menu, X, Cloud, Sun, Moon, Mail, Home, User, Briefcase, Code, FolderOpen, MessageCircle, ChevronDown } from 'lucide-react';
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

  // Close menu when clicking outside or on a link
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Sticky Right Navigation - Only show when scrolled - DESKTOP ONLY */}
      {isScrolled && (
        <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 right-4 z-40 transition-all duration-500 ease-out transform">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl p-2 animate-slideInRight">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="w-10 h-10 text-green-500 hover:text-green-400 bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-300 flex items-center justify-center" title="Home">
                <Home className="w-4 h-4" />
              </a>
              <a href="#about" className="w-10 h-10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-300 flex items-center justify-center" title="About">
                <User className="w-4 h-4" />
              </a>
              <a href="#experience" className="w-10 h-10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-300 flex items-center justify-center" title="Experience">
                <Briefcase className="w-4 h-4" />
              </a>
              <a href="#skills" className="w-10 h-10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-300 flex items-center justify-center" title="Skills">
                <Code className="w-4 h-4" />
              </a>
              <a href="#projects" className="w-10 h-10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-all duration-300 flex items-center justify-center" title="Projects">
                <FolderOpen className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-10 h-10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700/50 rounded-lg transition-all duration-300 flex items-center justify-center" title="Contact">
                <MessageCircle className="w-4 h-4" />
              </a>

              <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-2 mt-2">
                <button
                  onClick={toggleDarkMode}
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center border border-gray-300/50 dark:border-gray-600/50"
                  aria-label="Toggle dark mode"
                >
                  <div className="relative w-4 h-4">
                    <Sun className={`absolute inset-0 h-4 w-4 text-yellow-500 transition-all duration-300 ${isDarkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                    <Moon className={`absolute inset-0 h-4 w-4 text-blue-400 transition-all duration-300 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Centered Navigation Menu - Show when not scrolled - DESKTOP ONLY */}
      {!isScrolled && (
        <div className="hidden lg:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl p-3 transition-colors duration-300">
            <div className="flex items-center space-x-3">
              <a href="#home" className="w-12 h-12 text-green-500 hover:text-green-400 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center" title="Home">
                <Home className="w-5 h-5" />
              </a>
              <a href="#about" className="w-12 h-12 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center" title="About">
                <User className="w-5 h-5" />
              </a>
              <a href="#experience" className="w-12 h-12 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center" title="Experience">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="#skills" className="w-12 h-12 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center" title="Skills">
                <Code className="w-5 h-5" />
              </a>
              <a href="#projects" className="w-12 h-12 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center" title="Projects">
                <FolderOpen className="w-5 h-5" />
              </a>
              <a href="#contact" className="w-12 h-12 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 rounded-xl transition-all duration-300 flex items-center justify-center" title="Contact">
                <MessageCircle className="w-5 h-5" />
              </a>

              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 mx-2 transition-colors duration-300"></div>

              <button
                onClick={toggleDarkMode}
                className="w-12 h-12 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center border border-gray-300 dark:border-gray-600"
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

      {/* Scroll Indicator - DESKTOP ONLY */}
      {!isScrolled && (
        <div className="hidden xl:block fixed top-1/2 right-6 transform -translate-y-1/2 z-40 transition-all duration-500 ease-out">
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-lg p-2 animate-bounce transition-colors duration-300">
            <div className="flex flex-col items-center justify-center h-20 w-8">
              <div className="text-gray-600 dark:text-gray-300 text-xs font-medium transform rotate-90 whitespace-nowrap mb-3 transition-colors duration-300">
                Scroll
              </div>
              <div className="flex flex-col items-center -space-y-1">
                <ChevronDown className="w-3 h-3 text-gray-600 dark:text-gray-300 transition-colors duration-300" />
                <ChevronDown className="w-3 h-3 text-gray-600 dark:text-gray-300 opacity-60 transition-colors duration-300" />
                <ChevronDown className="w-3 h-3 text-gray-600 dark:text-gray-300 opacity-30 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Header - ALWAYS VISIBLE ON MOBILE */}
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-50 shadow-sm backdrop-blur-md bg-white/95 dark:bg-gray-900/95 transition-colors duration-300 lg:hidden">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <Cloud className="h-4 w-4 text-white" />
                </div>
                <span className="text-base font-semibold text-gray-900 dark:text-white">Priyanshu K.</span>
              </div>
            </div>

            {/* Mobile menu button & dark toggle */}
            <div className="flex items-center space-x-2">
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
                className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-14 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-xl max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              <a href="#home" onClick={closeMenu} className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Home className="h-5 w-5 text-green-500" />
                <span className="font-medium">Home</span>
              </a>
              <a href="#about" onClick={closeMenu} className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <User className="h-5 w-5 text-gray-500" />
                <span className="font-medium">About</span>
              </a>
              <a href="#experience" onClick={closeMenu} className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Briefcase className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Experience</span>
              </a>
              <a href="#skills" onClick={closeMenu} className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Code className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Skills</span>
              </a>
              <a href="#projects" onClick={closeMenu} className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <FolderOpen className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Projects</span>
              </a>
              <a href="#contact" onClick={closeMenu} className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <MessageCircle className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Contact</span>
              </a>
              <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
                <a href="#contact" onClick={closeMenu} className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;