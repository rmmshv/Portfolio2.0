import React from "react";
import { FaGithub, FaLinkedinIn, FaExternalLinkAlt } from "react-icons/fa";
import { about } from "../../data/portfolio";
import "./About.css";

const About = () => {
  const { title, description, meInfo, cv, github, linkedin } = about;
  return (
    <section className="about" id="about">
      <div className="about-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" size={25} />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="icon" size={25} />
        </a>
        <a href={cv} target="_blank" rel="noopener noreferrer">
          <span id="decor-resume">Resume</span>
          <FaExternalLinkAlt className="icon" size={20} />
        </a>
      </div>
    </section>
  );
};

export default About;