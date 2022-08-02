import React from "react";
import { NavLinks } from "../StyledComponents/navLinks.styled.js";
import logo from "../img/logo_small_orange.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <NavLinks to="/about">About Me</NavLinks>
        <NavLinks to="/projects">Projects</NavLinks>
        <NavLinks to="/skills">Skills</NavLinks>
        <NavLinks to="/contacts">Contact</NavLinks>
      </div>
    </nav>
  );
}

export default Navbar;
