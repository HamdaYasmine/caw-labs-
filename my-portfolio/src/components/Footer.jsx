import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCoffee, FaCode } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.content}
        >
          
          <div className={styles.brand}>
            <h3 className={styles.brandName}>Yasmine HAMDA</h3>
            <p className={styles.brandTagline}>"Code. Create. Innovate."</p>
          </div>

          
          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><a href="#home" className={styles.link}>Home</a></li>
              <li><a href="#projects" className={styles.link}>Projects</a></li>
              <li><a href="#skills" className={styles.link}>Skills</a></li>
              <li><a href="#contact" className={styles.link}>Contact</a></li>
            </ul>
          </div>

          {/* Credits */}
          <div className={styles.credits}>
            
            <p className={styles.techStack}>
              Built with React, Vite & CSS Modules
            </p>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>
            &copy; {currentYear} Yasmine Hamda. All rights reserved.
          </p>
          <p className={styles.notice}>
            This portfolio is part of Web Application Design course.
          </p>
        </div>

        {/* Back to Top Button */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.backToTop}
        >
          ↑
        </motion.a>
      </div>

      {/* Animated Waves */}
      <div className={styles.waves}>
        <div className={styles.wave1}></div>
        <div className={styles.wave2}></div>
        <div className={styles.wave3}></div>
      </div>
    </footer>
  );
};

export default Footer;