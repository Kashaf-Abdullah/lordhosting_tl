import React, { useState } from "react";
import "./navsociallink.css";

const NavSocialLink = () => {
  return (
    <div className="nav-social-link flex-container">
      <div className="navsociallink container">
        <div className="left-sociallinks">
          <a href="">Support | </a>

          <a href="">Documentation</a>
        </div>

        <div className="right-sociallinks">
          <a href="">Connexion</a> <a href="">Incription</a>
        </div>
      </div>
    </div>
  );
};

export default NavSocialLink;
