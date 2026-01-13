import { Github, Linkedin } from 'lucide-react';

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href="https://github.com/pkdeva"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 active:scale-95"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://linkedin.com/in/pkdeva"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 sm:p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://x.com/pkdevaa"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-black dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 active:scale-95"
              aria-label="X (formerly Twitter)"
            >
              <XIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span>© {currentYear} Priyanshu K.</span>
            <span className="text-center px-4">Stability is a myth. I simply forced this to behave.</span>
          </div>
        </div>
      </div>  
    </footer>
  );
};

export default Footer;