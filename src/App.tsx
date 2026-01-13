import { useState, useEffect } from 'react';
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
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
        <Header />
        {/* Add top padding on mobile for fixed header */}
        <main className={`pt-14 lg:pt-0 transition-all duration-500 ${isScrolled ? 'lg:ml-96 lg:mr-16' : ''}`}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <div className={`transition-all duration-500 ${isScrolled ? 'lg:ml-96 lg:mr-16' : ''}`}>
          <Footer />
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;