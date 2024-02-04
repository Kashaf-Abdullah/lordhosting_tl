import React from "react";
import discord from "../img/discordlogo.png";
const CommPterod = () => {
  return (
    <div className="commun-pt-con container-fluid">
      <div className="container comm-pt-sec">
        <div className="left-comm-pt-intro">
          <h4>Une communauté pour vous aider !</h4>
          <p>
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the
          </p>
          <button className="button comm-btn">Rejoignez notre discord</button>
        </div>
        <div className="right-comm-pt-intro">
          <img src={discord} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CommPterod;
