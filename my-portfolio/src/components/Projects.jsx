
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaNodeJs,
  FaNpm,
  FaReact,
  FaCheckCircle,
  FaTrello
} from 'react-icons/fa';
import { SiJest } from 'react-icons/si';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Lab 1: HTML & CSS Mastery",
      description: "Created responsive web pages with proper HTML structure and CSS styling. Learned semantic HTML and CSS selectors.",
      tech: ["HTML5", "CSS3"],
      github: "https://github.com/HamdaYasmine/caw-labs-/tree/master/Lab1", 
      icon: <FaHtml5 className={styles.htmlIcon} />,
      parts: ["Part 1: HTML Structure", "Part 2: CSS Styling"],
      keyLearning: "Web Fundamentals"
    },
    {
      id: 2,
      title: "Lab 2: Git & GitHub",
      description: "Mastered version control with Git, managed repositories, and collaborated using GitHub for project storage.",
      tech: ["Git", "GitHub", "Version Control"],
      github: "https://github.com/HamdaYasmine/caw-labs-/tree/lab2-setup", 
      icon: <FaGitAlt className={styles.gitIcon} />,
      parts: ["Git Commands", "Repository Management"],
      keyLearning: "Version Control"
    },
    {
      id: 3,
      title: "Lab 3: Node.js & NPM",
      description: "Set up Node.js environment, managed packages with NPM, and understood backend JavaScript runtime.",
      tech: ["Node.js", "NPM", "JavaScript"],
      github: "https://github.com/HamdaYasmine/caw-labs-/tree/master/Lab3.G3_HamdaYasmine", 
      icon: <FaNodeJs className={styles.nodeIcon} />,
      parts: ["Node Setup", "Package Management"],
      keyLearning: "Backend Basics"
    },
    {
      id: 4,
      title: "Lab 4: Jest Testing",
      description: "Implemented unit tests for JavaScript modules using Jest testing framework.",
      tech: ["Jest", "Testing", "JavaScript"],
      github: "https://github.com/HamdaYasmine/caw-labs-/tree/main/Lab4_Jest", 
      icon: <SiJest className={styles.jestIcon} />,
      parts: ["Unit Testing", "Test Cases"],
      keyLearning: "Testing Fundamentals"
    },
    {
      id: 5,
      title: "Lab 5: React Components",
      description: "Built interactive UIs using React functional components and understood component lifecycle.",
      tech: ["React", "Components", "JSX"],
      github: "https://github.com/HamdaYasmine/caw-labs-/tree/master/src", 
      icon: <FaReact className={styles.reactIcon} />,
      parts: ["Functional Components", "Props & State"],
      keyLearning: "React Basics"
    },
    {
      id: 6,
      title: "Lab 7: Kanban Board",
      description: "Developed a Trello-like task management board with drag-and-drop functionality using React.",
      tech: ["React", "State Management", "UI/UX"],
      github: "https://github.com/HamdaYasmine/caw-labs-/tree/main/kanban-board", 
      icon: <FaTrello className={styles.kanbanIcon} />,
      parts: ["Drag & Drop", "Task Management"],
      keyLearning: "React Application"
    }
  ];

 
  const techIcons = {
    "HTML5": <FaHtml5 style={{ color: '#E34F26' }} />,
    "CSS3": <FaCss3Alt style={{ color: '#1572B6' }} />,
    "Responsive": <FaCheckCircle style={{ color: '#28a745' }} />,
    "Git": <FaGitAlt style={{ color: '#F05032' }} />,
    "GitHub": <FaGithub style={{ color: '#181717' }} />,
    "Version Control": <FaGitAlt style={{ color: '#F05032' }} />,
    "Node.js": <FaNodeJs style={{ color: '#339933' }} />,
    "NPM": <FaNpm style={{ color: '#CB3837' }} />,
    "JavaScript": <FaNodeJs style={{ color: '#F7DF1E' }} />,
    "Jest": <SiJest style={{ color: '#C21325' }} />,
    "Testing": <FaCheckCircle style={{ color: '#28a745' }} />,
    "React": <FaReact style={{ color: '#61DAFB' }} />,
    "Components": <FaReact style={{ color: '#61DAFB' }} />,
    "JSX": <FaReact style={{ color: '#61DAFB' }} />,
    "State Management": <FaReact style={{ color: '#764ABC' }} />,
    "UI/UX": <FaCheckCircle style={{ color: '#007bff' }} />
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            My <span className={styles.highlight}>Projects</span>
          </h2>
          <p className={styles.subtitle}>
            Hands-on labs completed during Web Application Design courses
          </p>
          <div className={styles.underline}></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={styles.card}
            >
              {/* Lab Icon */}
              <div className={styles.cardIcon}>
                {project.icon}
                <div className={styles.iconBackground}></div>
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                
                {/* Lab Parts */}
                <div className={styles.labParts}>
                  {project.parts.map((part, idx) => (
                    <span key={idx} className={styles.partTag}>
                      {part}
                    </span>
                  ))}
                </div>
                
                <p className={styles.cardDescription}>{project.description}</p>
                
                {/* Key Learning */}
                <div className={styles.keyLearning}>
                  <span className={styles.keyLabel}>Key Learning:</span>
                  <span className={styles.keyValue}>{project.keyLearning}</span>
                </div>
                
                {/* Tech Stack */}
                <div className={styles.techStack}>
                  <h4 className={styles.techLabel}>Technologies Used:</h4>
                  <div className={styles.techIcons}>
                    {project.tech.map((techItem, index) => (
                      <div key={index} className={styles.techItem}>
                        <span className={styles.techIcon}>
                          {techIcons[techItem] || <FaCheckCircle />}
                        </span>
                        <span className={styles.techName}>{techItem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.githubLink}
                >
                  <FaGithub className={styles.githubIcon} />
                  View Lab Details
                </motion.a>
              </div>

              {/* Lab Number Badge */}
              <div className={styles.labNumber}>
                Lab {project.id === 6 ? 7 : project.id}
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default Projects;