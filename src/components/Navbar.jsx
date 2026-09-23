import { useState, useEffect } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { personalInfo } from '../data';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' }, // Assuming Experience and Achievements map to the same conceptual area based on request
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'glass-nav' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="nav-logo">FARHATH</a>
        
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '20px' }}>
            <FaGithub /> GitHub ↗
          </a>
          <a href="/resume.pdf" download className="btn btn-primary" style={{ padding: '8px 16px', borderRadius: '20px' }}>
            Download Resume
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="glass" style={{
          position: 'absolute', top: '100%', left: '20px', right: '20px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 1001
        }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 600 }}>
              {link.name}
            </a>
          ))}
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', fontWeight: 600 }}>GitHub ↗</a>
          <a href="/resume.pdf" download style={{ color: '#fff', fontWeight: 600 }}>Download Resume</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
