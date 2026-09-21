import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="brand" aria-label="Priyanshu Kumar, home">pk<span>.</span></a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#projects">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={toggleDarkMode} aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} theme`}>
            {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>
      </div>
    </header>
  );
};
export default Header;
