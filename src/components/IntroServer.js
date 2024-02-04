import React from "react";
import IntroComp from "./Cards/IntroComp";
import chart from ".././img/serverimg.svg";
const IntroServer = () => {
  return (
    <div className="rw-Header-Section flex-container" id="wd-intro-section">
      <IntroComp
        head="Serveurs dédiés rien que pour vous !"
        subheading="La puissance, la fluidité en bénéficiant de serveurs maintenus et sécurisés en île de France."
        text="into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset shee containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={chart}
      />

      <div className="wd-intro-svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,0L48,32C96,64,192,128,288,149.3C384,171,480,149,576,122.7C672,96,768,64,864,48C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
       </div>
    </div>
  );
};

export default IntroServer;
