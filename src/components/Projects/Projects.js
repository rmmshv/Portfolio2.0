import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";
import { projects } from "../../data/portfolio";
import getColorClass from "../../utils/getColorClass";

const Projects = () => {
  const { personalProjects } = projects;
  const marqueeRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [playingProject, setPlayingProject] = useState(null);

  const handlePreviewToggle = (index) => {
    setPlayingProject((prev) => (prev === index ? null : index)); // Toggle preview
  };

  

  return (
    <section className="projects" id="projects">
      <div className="marquee-container">
        <div className="marquee-content">
          {new Array(15).fill("Projects").map((text, index) => (
            <h1 key={index}>{text}</h1>
          ))}
        </div>
      </div>

      <div className="container-grid">
        {personalProjects.map((project, index) => (
          <article
            className="project-card"
            key={index}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
          <div className="project-content">
            <h3 className="project-title">
              <a 
                href={project.demo} 
                title="Visit website" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
              {project.demo && (
                <a 
                  href={project.demo} 
                  title="Visit website" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  <FaExternalLinkAlt className="icon" size={20} />
                </a>
              )}
            </h3>

            <p className="project-description">{project.description}</p>
          </div>

            <div className="footer">
              {/* GIF Preview appears above technology stack */}
              {project.gifPreview && playingProject === index && (
                <img
                  src={project.gifPreview}
                  alt={`${project.title} preview`}
                  className="project-preview"
                />
              )}

              {/* Technology Stack */}
              <div className="technology-stack">
                {project.technologies.map((tech, index) => (
                  <span className={`${getColorClass(tech)}`} key={index}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="project-links">
                {project.github && (
                  <a href={project.github} title="Visit github" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" size={25} />
                  </a>
                )}
                
                <a 
                  className="preview-gif"
                  title="View demo"
                  onClick={() => handlePreviewToggle(index)}
                >
                  {playingProject === index ? "close demo" : "demo"}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
