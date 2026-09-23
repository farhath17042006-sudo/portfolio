import { useRef } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Universe of Skills
      </motion.h2>
      
      <div className="skills-container">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div 
            key={category} 
            className="skills-category glass"
            style={{ padding: '24px' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 style={{ textTransform: 'capitalize' }}>
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="skills-list">
              {items.map((skill, i) => (
                <div key={i} className="skill-item glass">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
