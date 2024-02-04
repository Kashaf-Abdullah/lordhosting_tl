import React from "react";
import IntroComp from "./Cards/IntroComp";
import chart from ".././img/pterry1.svg";
const IntroPterod= () => {
  return (
    <div className="rw-Header-Section flex-container" id="wd-intro-section">
      <IntroComp
        head="Serveurs VPS Pterodactyl"
        subheading="La puissance, la fluidité en bénéficiant de serveurs maintenus et sécurisés en île de France."
        text="into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset shee containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={chart}
        
      />

      <div className="wd-intro-svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,85.3C640,85,800,107,960,133.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
    </div>
  );
};

export default IntroPterod;
