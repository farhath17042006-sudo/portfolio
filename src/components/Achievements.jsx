import { motion } from 'framer-motion';
import { achievements, certifications } from '../data';
import { FaTrophy, FaCertificate } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section id="experience" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Achievements & Certifications
      </motion.h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
        
        {/* Achievements */}
        <motion.div 
          className="glass" 
          style={{ padding: '32px' }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', color: '#fff' }}>
            <FaTrophy color="#f59e0b" /> Achievements
          </h3>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {achievements.map((item, index) => (
              <li key={index} style={{ display: 'flex', gap: '12px', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="glass" 
          style={{ padding: '32px' }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', color: '#fff' }}>
            <FaCertificate color="#10b981" /> Certifications
          </h3>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {certifications.map((item, index) => (
              <li key={index} style={{ display: 'flex', gap: '12px', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
