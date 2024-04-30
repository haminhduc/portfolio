import React from "react";
import Navbar from "../components/Navbar";
import DynamicHero from "../components/DynamicHero";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <DynamicHero
        heading="About."
        text="Some brief information about myself."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
