import { useEffect } from 'react';
import './styles/globals.css';

import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Expertise   from './components/Expertise';
import Projects    from './components/Projects';
import Experience  from './components/Experience';
import Credentials from './components/Credentials';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
