import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <h1>Vincent Caraga</h1>
      {/*Desktop Menu*/}
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <a
          href="#home"
          onClick={() => {
            setMenu("home");
            setIsOpen(false);
          }}
          className={menu === "home" ? "active" : ""}
        >
          HOME
        </a>
        <a
          href="#about-me"
          onClick={() => {
            setMenu("about");
            setIsOpen(false);
          }}
          className={menu === "about" ? "active" : ""}
        >
          ABOUT
        </a>
        <a
          href="#service"
          onClick={() => {
            setMenu("services");
            setIsOpen(false);
          }}
          className={menu === "services" ? "active" : ""}
        >
          PROJECTS
        </a>
        <a
          href="#footer-contact"
          onClick={() => {
            setMenu("contact-us");
            setIsOpen(false);
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          CONTACT
        </a>
        <a href="">TEST</a>
      </ul>

      {/* Hamburger Icon*/}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </div>
  );
};

export default Navbar;
