import yasmineImage from '../assets/mypic.jpg';
import React from 'react';
import styles from '../styles/Home.module.css';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      {/* Animated Background */}
      <div className={styles.animatedBackground}></div>
      
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.content}
        >
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className={styles.imageContainer}
          >
            <img 
             src={yasmineImage} 
             alt="Yasmine"
             className={styles.profileImage}
           />
            <div className={styles.imageGlow}></div>
          </motion.div>

          {/*  name w tagline */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className={styles.name}
          >
             <span className={styles.highlight}>Yasmine</span> Hamda
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className={styles.tagline}
          >
            Junior React Developer
          </motion.h2>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className={styles.bio}
          >
             Web development student working with React, JavaScript, and modern frameworks. 
             I develop complete front-end applications, ensuring they are functional, fast, and well-structured..
            
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className={styles.ctaContainer}
          >
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.ctaButton}
            >
              View My Work
              <FaArrowDown className={styles.arrowIcon} />
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.secondaryButton}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className={styles.scrollIndicator}
          >
            <div className={styles.mouse}>
              <div className={styles.wheel}></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;