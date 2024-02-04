import React from "react";
import IntroComp from "./Cards/IntroComp";
import ser from ".././img/gamingserver.svg";
const IntroServGame = () => {
  return (
    <div className="rw-Header-Section flex-container" id="wd-intro-section">
      <IntroComp
        head="
Serveurs VPS haut de gamme"
        subheading="La puissance, la fluidité en bénéficiant de serveurs
maintenus et sécurisés en île de France.
"
        text="into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset shee containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={ser}
      />

      <div className="wd-intro-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,64L120,85.3C240,107,480,149,720,144C960,139,1200,85,1320,58.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default IntroServGame;
