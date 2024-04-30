import React from "react";
import "./FormStyles.css";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_avp3pij";
    const templateID = "template_egudumk";
    const publicKey = "UFWD7krD1h_YxpxbB";
    emailjs
      .sendForm({ serviceID }, { templateID }, form.current, {
        publicKey: { publicKey },
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="message-form">
      <h3>Leave me message</h3>
      <form action="" ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="form-name"
          name="from_name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-email"
          name="from_email"
          required
        />
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" className="form-subject" required />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="form-message"
          type="text"
          rows="6"
          placeholder="Your message"
          name="message"
        />
        <button className="btn" type="submit" value="send">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
