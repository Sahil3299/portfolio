import { motion } from "framer-motion";
import bloodConnectImg from "../assets/blood-connect.png";
import chatAppImg from "../assets/chatapp.png";
import yelpcampImg from "../assets/yelpcamp.png";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">🚀 Featured Projects</h2>
        <div className="title-underline" style={{ margin: "1rem 0" }} />
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Project
          title="Blood Connect"
          desc="Online blood donation platform using MERN stack."
          tags={["React", "Node.js", "MongoDB", "Express"]}
          url="https://blood-connect-teal.vercel.app/"
          img={bloodConnectImg}
          variants={itemVariants}
        />
        <Project
          title="Chat-Application"
          desc="A full-stack real-time chat application built with the MERN stack."
          tags={["React", "Node.js", "MongoDB", "Express"]}
          url="https://github.com/Sahil3299/Chat-App"
          img={chatAppImg}
          variants={itemVariants}
        />
         <Project
          title="Yelp-Camp"
          desc="A full-stack campground review application where users can browse, create, and review campgrounds."
          tags={["EJS", "Node.js", "MongoDB", "Express"]}
          url="https://github.com/Sahil3299/YelpCamp"
          img={yelpcampImg}
          variants={itemVariants}
        />
      </motion.div>
    </section>
  );
}

function Project({ title, desc, tags, variants, url, img }) {
  return (
    <motion.div
      className="project-card"
      variants={variants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      {img && <img src={img} alt={`${title} screenshot`} className="project-img" />}
      <div className="project-header">
        <div className="project-badge"></div>
        <h3>{title}</h3>
      </div>
      
      <p className="project-desc">{desc}</p>
      
      <div className="project-tags">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      
      <a className="btn btn-project" href={url} target="_blank" rel="noopener noreferrer">View Project →</a>
    </motion.div>
  );
}
