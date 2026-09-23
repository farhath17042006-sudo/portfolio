import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
        <motion.div 
          className="glass"
          style={{ padding: '40px', flex: '1 1 400px', maxWidth: '600px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <a href={`mailto:${personalInfo.email}`} className="skill-item glass" style={{ textDecoration: 'none', color: '#fff' }}>
              <FaEnvelope size={24} color="var(--accent-color)" />
              <span style={{ fontSize: '1.1rem' }}>{personalInfo.email}</span>
            </a>
            
            <a href={`tel:${personalInfo.phone}`} className="skill-item glass" style={{ textDecoration: 'none', color: '#fff' }}>
              <FaPhone size={24} color="var(--accent-color)" />
              <span style={{ fontSize: '1.1rem' }}>{personalInfo.phone}</span>
            </a>
            
            <div className="skill-item glass" style={{ color: '#fff' }}>
              <FaMapMarkerAlt size={24} color="var(--accent-color)" />
              <span style={{ fontSize: '1.1rem' }}>{personalInfo.location}</span>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                <FaGithub /> GitHub ↗
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                <FaLinkedin /> LinkedIn ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
