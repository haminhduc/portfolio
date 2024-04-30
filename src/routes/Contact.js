import React from "react";
import Navbar from "../components/Navbar";
import DynamicHero from "../components/DynamicHero";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <DynamicHero
        heading="Contact."
        text="Here is how to get in touch with me."
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
