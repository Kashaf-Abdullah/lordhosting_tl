import React from "react";
import hydracom from ".././img/hydracom-logo.png";
import stormwall from ".././img/StormWall-cybersecurity.png";

const ConnectiviteSerGame = () => {
  return (
    <div className="connectivite-sec container-fluid">
      <div className="connectivite-overlay"></div>
      <h1>La connectivité chez Lord Hosting</h1>
      <div className="connectivite-con container">
        <div className="left-connectivite">
          <img src={stormwall} alt="" />
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme.
          </p>
        </div>
        <div className="right-connectivite">
          <img src={hydracom} alt="" />
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectiviteSerGame;
