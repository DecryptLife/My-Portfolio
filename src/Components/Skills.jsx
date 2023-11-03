import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

function Skills() {
  return (
    <section id="skills">
      <div className="container section-container">
        <div className="section-header">
          <ChipIcon className="section-icon" />
          <h1 className="section-header-text">Languages &amp; Tools</h1>
        </div>
        <div className="skills-container">
          <img src="./java.svg"></img>
          <img src="./js.svg"></img>
          <img src="./git.svg"></img>
          <img src="./github.svg"></img>
          <img src="./python.svg"></img>
          <img src="./mongodb.svg"></img>
          <img src="./nodejs.svg"></img>
          <img src="./react.svg"></img>
          <img src="./typescript.svg"></img>
          <img src="./nextjs.svg"></img>
          <img src="./bootstrap.svg"></img>
          <img src="./cs.svg"></img>
          <img src="./express.svg"></img>
          <img src="./html.svg"></img>
          <img src="./heroku.svg"></img>
          <img src="./linux.svg"></img>
          <img src="./mysql.svg"></img>
          <img src="./nginx.svg"></img>
          <img src="./npm.svg"></img>
          <img src="./pytorch.svg"></img>
          <img src="./ubuntu.svg"></img>
          <img src="./vscode.svg"></img>
          <img src="./apache.svg"></img>
          <img src="./tensorflow.svg"></img>
          <img src="./tailwind.svg"></img>
          <img src="./springboot.svg"></img>
          <img src="./redux.svg"></img>
          <img src="./redis.svg"></img>
        </div>
      </div>
    </section>
  );
}

export default Skills;
