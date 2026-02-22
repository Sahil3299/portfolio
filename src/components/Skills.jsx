import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = {
    Languages: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", icon: "🐍" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", icon: "🔧" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", icon: "⚡" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", icon: "☕" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", icon: "📄" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", icon: "🎨" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", icon: "⚡" },

    ],
    Frameworks: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", icon: "⚛️" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", icon: "🟢" },
      {name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png", icon: "🌬️" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", icon: "🚀" },
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", icon: "🅱️" }
    ],
    Tools: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", icon: "🐬" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", icon: "🍃" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", icon: "📚" },
      { name: "REST API", logo: null, icon: "🌐" },
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">💻 Skills & Technologies</h2>
        <div className="title-underline" style={{ margin: "1rem 0" }} />
      </motion.div>

      {Object.entries(skillCategories).map(([category, skills]) => (
        <motion.div
          key={category}
          className="skill-category"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="category-title">{category}</h3>
          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className={`skill-card ${skill.highlight ? 'highlight' : ''}`}
                variants={itemVariants}
                whileHover={{ scale: 1.08, rotateZ: 3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="skill-icon">
                  {skill.logo ? (
                    <img src={skill.logo} alt={skill.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                  ) : (
                    skill.icon
                  )}
                </div>
                <span className="skill-name">{skill.name}</span>
                {skill.highlight && <span className="highlight-note">Expert</span>}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
