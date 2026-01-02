import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt, 
  FaGithub,
  FaNodeJs,
  FaNpm
} from 'react-icons/fa';
import { SiVite, SiJest } from 'react-icons/si';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "HTML5", level: 90, icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", level: 85, icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "JavaScript", level: 75, icon: <FaJs />, color: "#F7DF1E" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", level: 75, icon: <FaReact />, color: "#61DAFB" },
        { name: "Vite", level: 70, icon: <SiVite />, color: "#646CFF" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", level: 75, icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub", level: 80, icon: <FaGithub />, color: "#181717" },
        { name: "Node.js", level: 70, icon: <FaNodeJs />, color: "#339933" },
        { name: "NPM", level: 70, icon: <FaNpm />, color: "#CB3837" },
        { name: "Jest", level: 70, icon: <SiJest />, color: "#C21325" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Skills & <span className={styles.highlight}>Technologies</span>
          </h2>
          <p className={styles.subtitle}>
            Technologies I've learned and worked with
          </p>
          <div className={styles.underline}></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={skillVariants}
              className={styles.category}
            >
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsList}>
                {category.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    className={styles.skillItem}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={styles.skillHeader}>
                      <div className={styles.skillIcon} style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    
                    <div className={styles.progressBar}>
                      <motion.div
                        className={styles.progressFill}
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Icons */}
        <div className={styles.floatingIcons}>
          <FaHtml5 className={styles.floatingIcon} style={{ animationDelay: '0s' }} />
          <FaCss3Alt className={styles.floatingIcon} style={{ animationDelay: '1s' }} />
          <FaReact className={styles.floatingIcon} style={{ animationDelay: '2s' }} />
          <FaGitAlt className={styles.floatingIcon} style={{ animationDelay: '3s' }} />
          <SiJest className={styles.floatingIcon} style={{ animationDelay: '4s' }} />
          <FaNodeJs className={styles.floatingIcon} style={{ animationDelay: '5s' }} />
        </div>
      </div>
    </section>
  );
};

export default Skills;