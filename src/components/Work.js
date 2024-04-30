import "./ProjectCardStyle.css";

import React from "react";
import ProjectCardData from "./ProjectCardData";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <div className="project-card-container">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
        {ProjectCardData.map((project, idx) => {
          return (
            <ProjectCard
              key={idx}
              imgSrc={project.imgSrc}
              title={project.title}
              desc={project.desc}
              view={project.view}
              source={project.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
