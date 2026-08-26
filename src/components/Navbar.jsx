import { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const links = ['About', 'Expertise', 'Projects', 'Experience', 'Testimonials', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">John Pendergrass</a>
        <ul className="nav-links" role="list">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
