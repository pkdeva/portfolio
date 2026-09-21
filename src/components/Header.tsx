import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const links = [['about', 'About'], ['experience', 'Experience'], ['skills', 'Capabilities'], ['projects', 'Work'], ['contact', 'Contact']];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="brand" onClick={() => setIsOpen(false)}><span className="brand-mark">PK</span><span>pk@infra:~$</span></a>
        <nav className={`header-nav ${isOpen ? 'is-open' : ''}`}>
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)}>{label}</a>)}
          <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle color theme">{isDarkMode ? <Sun size={15} /> : <Moon size={15} />}</button>
        </nav>
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">{isOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </header>
  );
};
export default Header;
