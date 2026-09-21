import type { ReactNode } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Header = ({ children }: { children: ReactNode }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="brand" aria-label="Priyanshu Kumar, home">pk<span>.</span></a>
        <div className="header-controls">
          {children}
          <button className="theme-toggle" onClick={toggleDarkMode} aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} theme`}>
            {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
