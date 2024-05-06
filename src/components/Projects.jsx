import React from "react";
import projects from "../assets/data/projects";
import "../styles/Projects.css";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <div id="projects" className="project-outer-div">
      <h1 className="project-section-heading">My Projects</h1>
      <div className="project-div">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
