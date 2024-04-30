import "./NavbarStyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [NavBgColor, setNavbarColor] = useState(false);

  const handleClick = () => setClick(!click);
  const handleNavbarBg = () => {
    if (window.scrollY >= 100) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  window.addEventListener("scroll", handleNavbarBg);
  return (
    <div className={NavBgColor ? "header header-bg" : "header"}>
      <h1>Minh Duc Ha's Portfolio</h1>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
