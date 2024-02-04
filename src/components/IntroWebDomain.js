import React from "react";
import sp from "../img/spiderman.png";

import support from "../img/support.png";
import IntroComp from "./Cards/IntroComp";

const IntroWebDomain = () => {
  return (
    <>
      <div className="wd-Header-Section flex-container" id="wd-intro-section">
        <IntroComp
          head="Offres Web & Domaine"
          subheading=" Profitez d'un panel conçu rien que pour vous, incluant rapidité et efficacité"
          text="into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset shee containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          image={sp}
        />

        <div className="wd-intro-svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,192L120,186.7C240,181,480,171,720,181.3C960,192,1200,224,1320,240L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default IntroWebDomain;
