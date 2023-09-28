import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <section id="projects">
      <div className="container skills-container">
        <div className="section-header">
          <CodeIcon className="section-icon" />
          <h1 className="section-header-text">My Projects</h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p> */}
        </div>
        <div className="projects-container-projects">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="project-group"
            >
              <div className="project-individual">
                <img
                  alt="gallery"
                  className="project-image"
                  src={project.image}
                />
                <div className="project-image-flip">
                  <h2 className="project-subtitle">{project.subtitle}</h2>
                  <h1 className="project-title">{project.title}</h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
