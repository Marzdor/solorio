import React from "react";
import logo from "../images/solorio-logo.png";

const Header = props => {
  return (
    <header>
      <img src={logo} alt="Solorio Brewing CO. Logo" />
      <nav className="nav">
        <a className="nav-link" onClick={props.handleNavClick} href="#Home">
          Home
        </a>
        <a className="nav-link" onClick={props.handleNavClick} href="#Menu">
          Menu
        </a>
        <a className="nav-link" onClick={props.handleNavClick} href="#About">
          About
        </a>
        <a className="nav-link" onClick={props.handleNavClick} href="#Contact">
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Header;
