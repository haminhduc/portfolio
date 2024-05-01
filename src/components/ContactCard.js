import React from "react";
import "./ContactCardStyles.css";

const ContactCard = () => {
  return (
    <div className="contact-card">
      <h4>Contact Information:</h4>
      <p className="contact-email">Email: Haminhduc407@gmail.com</p>
      <p className="contact-phone">Phone: +1 437-477-3479</p>
      <p className="contact-location">Location: North York, ON M3H 3T7</p>
    </div>
  );
};

export default ContactCard;
