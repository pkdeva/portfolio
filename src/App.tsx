import { useEffect, useState } from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <DarkModeProvider>
      <div className={`site-shell ${isScrolled ? 'is-scrolled' : ''}`}>
        <Header />
        <main><Hero /><About /><Experience /><Skills /><Projects /><Contact /></main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}
export default App;
