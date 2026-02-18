import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/Sahil_Resume.pdf";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ["Engineering Student", "Web Developer", "React Learner"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = isDeleting ? 100 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hero-content"
          variants={itemVariants}
        >
          <motion.div
            className="hero-badge"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
            }}
          >
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              👋
            </motion.span>
            Welcome to my portfolio
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="hero-title"
          >
            Hi, I'm{" "}
            <motion.span
              className="hero-name"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Sahil
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            variants={itemVariants}
          >
            <span className="typing-text">
              {displayText}
              <span className="typing-cursor"></span>
            </span>
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.a
              className="btn btn-primary"
              href="#projects"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(139, 92, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects →
            </motion.a>
            <motion.a
              className="btn btn-outline"
              href={resume}
              download
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(139, 92, 246, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Download Resume
            </motion.a>
          </motion.div>

          {/* <motion.div
            className="hero-stats"
            variants={itemVariants}
          >
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </motion.div>
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </motion.div>
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="stat-number">12+</span>
              <span className="stat-label">Skills Mastered</span>
            </motion.div>
          </motion.div> */}

          <motion.div
            className="hero-socials"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/Sahil3299"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
            >
              🐙 GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sahil-shinde-a30948329"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
            >
              💼 LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          variants={itemVariants}
        >
          <motion.img
            src={profile}
            alt="Sahil Shinde"
            className="hero-image"
            whileHover={{
              scale: 1.03,
              rotate: 2,
            }}
            transition={{ duration: 0.3 }}
          />
          <div className="image-glow"></div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
}

