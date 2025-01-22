import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { FileText, MapPin } from "lucide-react"; // Import Lucide React icons
import "../styles/projects.css"

const Projects = () => (
  <div className="projects-container">
    <h2>Upcoming Creative Projects</h2>
    
    {/* Project Z */}
    <motion.div
      className="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-header">
        <FileText size={24} color="#4B9F87" />
        <h3>Project Z</h3>
      </div>
      <p>....***** SHIN ? ....</p>
      <div className="project-footer">
      </div>
    </motion.div>

    {/* Project E */}
    <motion.div
      className="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-header">
        <MapPin size={24} color="#4B9F87" />
        <h3>Project E</h3>
      </div>
      <p>...the stars...</p>
      <div className="project-footer">
      </div>
    </motion.div>

    {/* Project AME */}
    <motion.div
      className="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-header">
        <FileText size={24} color="#4B9F87" />
        <h3>Project AME</h3>
      </div>
      <p>...*STATIC*...</p>
      <div className="project-footer">
      </div>
    </motion.div>
  </div>
);

export default Projects;
