import React from "react";
import projects from "../assets/data/projects";
import "../styles/Projects.css";
function Projects() {
  return (
    <div className="project-outer-div">
      <h1 className="project-section-heading">My Projects</h1>
      <div className="project-div">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              className="project-image"
              src={project.image}
              alt={project.title}
            />
            <div className="project-skills">
              {project.skills.map((skill, skillIndex) => (
                <p key={skillIndex}>{skill}</p>
              ))}
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <a className="project-link" href="#">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a className="project-github" href="#">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
