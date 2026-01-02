
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaUser, FaComment, FaInstagram } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const data = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Error sending message. Please try again.');
      }
    }).catch(error => {
      alert('Error sending message. Please try again.');
    });
  };

  const socialLinks = [
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/in/yasmine-hamda-2815493a2", color: "#0A66C2" },
    { icon: <FaGithub />, name: "GitHub", url: "https://github.com/HamdaYasmine", color: "#181717" },
    { icon: <FaInstagram />, name: "Instagram", url: "https://www.instagram.com/iits__jasmin", color: "#932297ff" },
    { icon: <FaEnvelope />, name: "Email", url: "https://mail.google.com/mail/?view=cm&fs=1&to=yasmine.hamda@univ-constantine2.dz", color: "#EA4335" }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Get In <span className={styles.highlight}>Touch</span>
          </h2>
          <p className={styles.subtitle}>
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className={styles.underline}></div>
        </motion.div>

        <div className={styles.content}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.info}
          >
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoText}>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <div>
                  <h4>Email</h4>
                  <p>yasmine.hamda@univ-constantine2.dz</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <FaUser className={styles.contactIcon} />
                <div>
                  <h4>Location</h4>
                  <p>Setif/Constantine, Algeria</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <FaComment className={styles.contactIcon} />
                <div>
                  <h4>Available For</h4>
                  <p>Freelance & Full-time Positions</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Connect With Me</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={styles.socialLink}
                    style={{ '--social-color': social.color }}
                  >
                    {social.icon}
                    <span className={styles.socialName}>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.formContainer}
          >
            <form 
              action="https://formspree.io/f/xwvernbg" 
              method="POST"
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  <FaUser className={styles.labelIcon} />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  <FaEnvelope className={styles.labelIcon} />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your email"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  <FaComment className={styles.labelIcon} />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                  rows="5"
                  placeholder="Hi there! I'd like to talk about..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.submitButton}
              >
                Send Message<FaPaperPlane className={styles.buttonIcon} />
                
              </motion.button>
            </form>
          </motion.div>
        </div>

        
        <div className={styles.backgroundElements}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;