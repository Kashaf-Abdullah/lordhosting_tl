import React from "react";
const IntroComp = (props) => {
  return (
    <div className="wd-header-sec">
      <div className="wd-Headerr container">
        <div className="wd-left-header">
          <div className="wd-left-headerTxt">
            <span className="wd-left-desc-head">{props.head}</span>
            <span className="wd-left-desc-subhead">{props.subheading}</span>
            <span>
              <p>{props.text}</p>
            </span>

            <div className="wd-btn">
              <button class="button wd-intro-button">
                Découvrir les serveurs &#x2192;
              </button>
            </div>
          </div>
        </div>

        <div className="wd-right-header" style={{display:props.dis}}>
          <img src={props.image}></img>
        </div>
      </div>
    </div>
  );
};

export default IntroComp;
