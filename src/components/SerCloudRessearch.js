import React from "react";
import Ressearcher from "./Ressearcher";
const SerCloudRessearch = () => {
  return (
    <div className="Header-Section flex-container" id="intro-section">
      <div className="header-sec">
        <div className="Headerr container">
          <Ressearcher />
        </div>
      </div>{" "}
      <div className="intro-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L120,186.7C240,181,480,171,720,181.3C960,192,1200,224,1320,240L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SerCloudRessearch;
