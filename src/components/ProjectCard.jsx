import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCursor } from "./CursorContext";
const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
  });
  const { setHovering } = useCursor();

  return (
    <motion.div
      className="project-card"
      key={index}
      ref={ref} // Attach the ref to the component
      initial={{ y: 40, opacity: 0 }}
      animate={{
        y: inView ? 0 : 40, // Animate only when in view
        opacity: inView ? 1 : 0, // Animate opacity accordingly
      }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
    >
      <img className="project-image" src={project.image} alt={project.title} />
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
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
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
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
          >
            <i class="fa-brands fa-github"></i>
          </a>
        ) : null}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
