import React from "react";
import logo from "../images/logo.png";
import toggle from "../images/toggle.png";
import close from "../images/close.png";

function Header({ isNavOpen, handleNavOpen }) {
  return (
    <div
      style={{ zIndex: "1010" }}
      className="w-full h-20 bg-light-purple fixed flex items-center px-6"
    >
      <div className="w-24 pointer" onClick={handleNavOpen}>
        <img src={isNavOpen ? close : toggle} alt="Hamburger Menu" />
      </div>
      <img width="90" src={logo} />
    </div>
  );
}

export default Header;
