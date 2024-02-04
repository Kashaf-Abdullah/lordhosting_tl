import React from "react";

import map from "../img/spiderman.png";
import { Link } from "react-scroll";
import support from "../img/support.png";
const Intro = () => {
  return (
    <>
      <div className="Header-Section flex-container" id="intro-section">
        <div className="header-sec">
          <div className="Headerr container">
            <div className="left-header">
              <div className="left-headerTxt">
                <span className="left-desc-head">Découvrez nos offres</span>
                <span className="left-desc-subhead">
                  Bénéficiez de nos derniers serveurs Cloud, Gaming et Web
                </span>
                <span>
                  <p>
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset shee containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                </span>

                <div className="left-infra-btn">
                  <div class="in-btn" role="button">
                    <div className="infra-btn">
                      <div className="infra-icon">&#9729;</div>
                      <div className="infra-btn-det">
                        <span>Web</span>
                        <span>Consultez nos offres &#8594;</span>
                      </div>
                    </div>
                  </div>
                  <div class="in-btn" role="button">
                    <div className="infra-btn">
                      <div className="infra-icon">&#9729;</div>
                      <div className="infra-btn-det">
                        <span>Web</span>
                        <span>Consultez nos offres &#8594;</span>
                      </div>
                    </div>
                  </div>
                  <div class="in-btn" role="button">
                    <div className="infra-btn">
                      <div className="infra-icon">&#9729;</div>
                      <div className="infra-btn-det">
                        <span>Web</span>
                        <span>Consultez nos offres &#8594;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-header">
              <img src={map}></img>
            </div>
          </div>
        </div>
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
    </>
  );
};

export default Intro;
