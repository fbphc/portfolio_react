import React from "react";
import { NavLinks } from "../StyledComponents/navLinks.styled.js";
import logo from "../img/logo_small_orange.png";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        
          <img src={logo} alt="logo" />
        
      </div>
      <div>
        <NavLinks to="/">About Me</NavLinks>
        <NavLinks to="/projects">Projects</NavLinks>
        <NavLinks to="/contact">Contact</NavLinks>
      </div>
    </nav>
  );
}

export default Navbar;
