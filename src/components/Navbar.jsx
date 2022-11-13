import React, { useState } from "react";
import { NavLinks } from "../StyledComponents/navLinks.styled.js";
import logo from "../img/logo_small_orange.png";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState("hidden mobile-links");
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className={`mobile-links ${mobileMenu}`}>
          <div
            className="nav-links"
            onClick={
              mobileMenu === "visible"
                ? () => setMobileMenu("hidden")
                : () => setMobileMenu("visible")
            }
          >
            <NavLinks
              to="/"
              onClick={
                mobileMenu === "visible"
                  ? () => setMobileMenu("hidden")
                  : () => setMobileMenu("visible")
              }
            >
              About
            </NavLinks>
            <NavLinks
              to="/projects"
              onClick={
                mobileMenu === "visible"
                  ? () => setMobileMenu("hidden")
                  : () => setMobileMenu("visible")
              }
            >
              Projects
            </NavLinks>
            <NavLinks
              to="/contact"
              onClick={
                mobileMenu === "visible"
                  ? () => setMobileMenu("hidden")
                  : () => setMobileMenu("visible")
              }
            >
              Contact
            </NavLinks>
          </div>
        </div>
        <FaBars
          className="fabars"
          onClick={
            mobileMenu === "visible"
              ? () => setMobileMenu("hidden")
              : () => setMobileMenu("visible")
          }
        />
      </nav>
    </>
  );
}

export default Navbar;
