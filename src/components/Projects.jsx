import React from "react";
import projects from "../assets/data/projects";
import "../styles/Projects.css";
function Projects() {
  return (
    <div id="projects" className="project-outer-div">
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
            <div className="project-redirects">
              {project.link != "" ? (
                <a
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                  href={project.link}
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              ) : null}
              {project.github != "" ? (
                <a
                  className="project-github"
                  target="_blank"
                  rel="noreferrer"
                  href={project.github}
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
