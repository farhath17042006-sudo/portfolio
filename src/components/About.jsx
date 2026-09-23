import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const About = () => {
  return (
    <section id="about" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
        <motion.div 
          className="glass"
          style={{ padding: '40px', maxWidth: '800px', textAlign: 'center' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            {personalInfo.summary}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
