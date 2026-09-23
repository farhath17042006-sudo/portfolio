import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div 
              className="project-card glass"
              onClick={() => project.github ? window.open(project.github, '_blank') : null}
              style={{ cursor: project.github ? 'pointer' : 'default' }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              {project.github && (
                <div className="project-footer">
                  <span className="btn btn-outline" style={{ border: 'none', padding: 0 }}>
                    View Project →
                  </span>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                    onClick={(e) => e.stopPropagation()}
                    style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                  >
                    <FaGithub /> GitHub ↗
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
