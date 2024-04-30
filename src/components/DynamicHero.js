import "./DynamicHeroStyle.css";

import React from "react";

const DynamicHero = (props) => {
  return (
    <div className="dymHero-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default DynamicHero;
