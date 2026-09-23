import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <h2 className="footer-title">{personalInfo.name}</h2>
        <p className="footer-subtitle">{personalInfo.role}</p>
        
        <div className="footer-socials">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} title="Email">
            <FaEnvelope />
          </a>
        </div>
        
        <p className="footer-copyright">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
