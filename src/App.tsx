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
  return (
    <DarkModeProvider>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main"><Hero /><Projects /><About /><Experience /><Skills /><Contact /></main>
      <Footer />
    </DarkModeProvider>
  );
}
export default App;
