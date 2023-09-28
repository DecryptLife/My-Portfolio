import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

function Skills() {
  return (
    <section id="skills">
      <div className="container section-container">
        <div className="section-header">
          <ChipIcon className="section-icon" />
          <h1 className="section-header-text">Skills &amp; Technologies</h1>
        </div>
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill} className="skill-layout">
              <div className="skill-component">
                <BadgeCheckIcon className="badge-icon" />
                <span className="skill-name">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
