import React from "react";
import { FaGithub, FaLinkedinIn, FaExternalLinkAlt } from "react-icons/fa";
import { about } from "../../data/portfolio";
import "./About.css";

const About = () => {
  const { title, description, cv, github, linkedin } = about;
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-intro">
          <h2> {title} </h2> <p> {description} </p>{" "}
          <div className="about-links">
            <a
              href={github}
              title="Visit Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="LinGitDecor">
                <FaGithub className="icon" size={25} />{" "}
              </span>{" "}
            </a>{" "}
            <a
              href={linkedin}
              title="Visit LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="LinGitDecor">
                <FaLinkedinIn className="icon" size={25} />{" "}
              </span>{" "}
            </a>{" "}
            <a
              href={cv}
              title="Open resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="decor-resume"> Resume </span>{" "}
              <FaExternalLinkAlt className="icon" size={20} />{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default About;
