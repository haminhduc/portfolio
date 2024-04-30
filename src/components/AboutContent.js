import "./AboutContentStyle.css";
import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          Hey, my name is Minh Duc Ha, and I use Steven as my nickname. I'm a
          front-end web developer from Canada. I'm also passionate about pop
          music, playing sports, and traveling, and I'm always curious to learn
          more when it comes to new technologies and creative coding.
        </p>
        <Link to="/contact">
          <buttton className="btn">Contact</buttton>
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
