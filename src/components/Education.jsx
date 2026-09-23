import { motion } from 'framer-motion';
import { education } from '../data';

const Education = () => {
  return (
    <section id="education" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      
      <div className="timeline">
        {education.map((edu, index) => (
          <motion.div 
            key={index} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-content glass">
              <div className="timeline-date">{edu.duration}</div>
              <h3 style={{ marginBottom: '8px', color: '#fff' }}>{edu.degree}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>{edu.institution}</p>
              <p style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>{edu.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
