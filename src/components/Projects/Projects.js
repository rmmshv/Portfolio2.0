import React, { useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";
import { projects } from "../../data/portfolio";
import getColorClass from "../../utils/getColorClass";

const Projects = () => {
  const { title, personalProjects } = projects;
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Add animation class once component mounts
    if (marqueeRef.current) {
      marqueeRef.current.classList.add("enable-animation");
    }
  }, []);

  // fill marquee with words
  const repeatedText = new Array(10).fill("Projects");

  return (
    <section className="projects" id="projects">
      
      <div className="marquee-container">
        <div className="marquee-content">
          {repeatedText.map((text, index) => (
            <h1 key={index}>{text}</h1>
          ))}
          {/* dupe word for infinite loop */}
          {repeatedText.map((text, index) => (
            <h1 key={`dup-${index}`}>{text}</h1>
          ))}
        </div>
      </div>

      <div className="container-grid">
        {personalProjects.map((project, index) => (
          <article className="project-card" key={index}>
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
          
          <div className="footer">
            <div className="technology-stack">
              {project.technologies.map((tech, index) => (
                <span className={`${getColorClass(tech)}`} key={index}>
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" size={25} />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="icon" size={25} />
                  </a>
                )}
              </div>
          </div>
        </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
