import React from "react";
import Navbar from "../components/Navbar";
import DynamicHero from "../components/DynamicHero";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <DynamicHero
        heading="Contact."
        text="Here is how to get in touch with me."
      />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default Contact;
