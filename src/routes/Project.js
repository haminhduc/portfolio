import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DynamicHero from "../components/DynamicHero";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <DynamicHero
        heading="Projects."
        text="I hope you find something interesting here."
      />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
