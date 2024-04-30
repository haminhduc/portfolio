import "./HeroImgStyle.css";
import React from "react";
import HeroImg from "../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={HeroImg} alt="hero img" className="hero-img" />
      </div>
      <div className="content">
        <p>HI, I'M A WEB DEVELOPER.</p>
        <h1>JAVASCRIPT DEVELOPER.</h1>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
