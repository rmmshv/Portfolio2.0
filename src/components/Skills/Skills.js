import React, { useState, useEffect } from "react";
import "./Skills.css";
import { skills } from "../../data/portfolio";
import getColorClass from "../../utils/getColorClass";

const Skills = () => {
  const { title, mySkills } = skills;
  
  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <h1 className="skills-title scroll-effect"> {title} </h1>
      </div>
      <div className="skills-content">
        <div className="skills-container-grid">
          {mySkills.map((skill, index) => (
            <article className="skills-card" key={index}>
              <h3 className="skills-title">{skill.title}</h3>
              <div className="skills-stack">
                {skill.skills.map((skill, index) => (
                  <span className={`${getColorClass(skill)}`} key={index}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
