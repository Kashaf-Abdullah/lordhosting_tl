import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./navbar.css";
const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };
  return (
    <div className="Navbar-container ">
      <header className="container-fluid">
        <div className="nav-logo-con">
          <img src={logo} alt="logo" className="nav-logo"></img>
        </div>
        <nav ref={navRef}>
          <div className="navbar-n">
            <div className="navbar-items">
              <NavLink
                spy={true}
                to="/webdomain"
                smooth={true}
                onClick={closeNavbar}
              >
                <a>WEB & DOMAIN</a>
              </NavLink>
              <NavLink
                spy={true}
                to="/servicegame"
                smooth={true}
                onClick={closeNavbar}
              >
                <a>SERVICE GAMING</a>
              </NavLink>
              <NavLink
                spy={true}
                to="/servicecloud"
                smooth={true}
                onClick={closeNavbar}
              >
                <a>SERVICE CLOUD</a>
              </NavLink>
            </div>
            <div className="navbar-items-btn">
              <button class="nav-button" role="button">
                ESCAPE CLIENT
              </button>

              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
              </button>
            </div>
          </div>
        </nav>
        <button className="nav-btn nav-bar-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};

export default Navbar;
