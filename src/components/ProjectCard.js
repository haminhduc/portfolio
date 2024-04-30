import "./ProjectCardStyle.css";

import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = (prop) => {
  return (
    <div className="project-card">
      <img src={prop.imgSrc} alt="project img" className="project-img" />
      <h2 className="project-title">{prop.title}</h2>
      <div className="project-detail">
        <p>{prop.desc}</p>
        <div className="pro-btns">
          <NavLink to={prop.view} target="_blank" className="btn">
            View
          </NavLink>
          <NavLink to={prop.source} target="_blank" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
