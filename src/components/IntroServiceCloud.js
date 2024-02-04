import React from "react";
import map from "../img/globe.svg";
const IntroServiceCloud = () => {
  return (
    <div className="service-cloud-con container-fluid">
      <div className="container ser-cloud-sec">
        <div className="left-sc-intro">
          <h4>Pourquoi enregister un nom de domaine?</h4>
          <p>
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset shee
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="right-sc-intro">
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default IntroServiceCloud;
