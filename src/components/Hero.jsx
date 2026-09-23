import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Html } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data';
import * as THREE from 'three';

const TechLogo = ({ position, color, text }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} wireframe />
        <Html position={[0, 0, 0]} center>
          <div style={{ color: color, fontWeight: 'bold', fontSize: '1.2rem', textShadow: `0 0 10px ${color}` }}>
            {text}
          </div>
        </Html>
      </mesh>
    </Float>
  );
};

const HolographicComputer = () => {
  const groupRef = useRef();

  useFrame((state) => {
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        {/* Base */}
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[4, 0.2, 3]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0.5, -1.4]} rotation={[0.1, 0, 0]}>
          <boxGeometry args={[3.8, 2.5, 0.1]} />
          <meshStandardMaterial color="#0f0c29" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Hologram Effect */}
        <mesh position={[0, 0.5, -1.3]} rotation={[0.1, 0, 0]}>
          <planeGeometry args={[3.6, 2.3]} />
          <meshBasicMaterial color="#00f2fe" transparent opacity={0.2} side={THREE.DoubleSide} />
        </mesh>
      </Float>
      
      {/* Floating Logos */}
      <TechLogo position={[-3, 1, 1]} color="#f89820" text="Java" />
      <TechLogo position={[3, 2, 0]} color="#3776ab" text="Python" />
      <TechLogo position={[-2, 3, -1]} color="#f0db4f" text="JS" />
      <TechLogo position={[2, -0.5, 2]} color="#ffffff" text="GitHub" />
    </group>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero container">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="hero-subtitle">Hi, I'm {personalInfo.name} 👋</h2>
        <h1 className="hero-title">
          <span style={{ background: 'linear-gradient(to right, #3b82f6, #00f2fe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Software Developer
          </span>
          <br />& AI Enthusiast
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem', maxWidth: '80%' }}>
          {personalInfo.summary}
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Explore My Work →
          </a>
          <a href="/resume.pdf" download className="btn btn-outline">
            Download Resume →
          </a>
        </div>

        <div className="hero-socials">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="social-icon" title="Email">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      <div className="hero-3d-container">
        <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00f2fe" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <HolographicComputer />
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
