import "./FooterStyle.css";

import React from "react";
import {
  FaHome,
  FaMailBulk,
  FaFacebook,
  FaPhone,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="contact location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>North York, ON M3H 3T7</p>
          </div>
          <div className="contact phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>+1 437-477-3479</p>
          </div>
          <div className="contact email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <p>Haminhduc407@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <h4>About me:</h4>
          <p>
            My name is Minh Duc Ha, and I'm a front-end developer based in North
            York, Ontario, Canada. I'm passionate about cutting-edge,
            pixel-perfect, beautiful interfaces, and intuitively implemented UX.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />{" "}
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />{" "}
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
