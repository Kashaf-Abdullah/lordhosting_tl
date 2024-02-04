import React from "react";
import InfrastructureCard from "./InfrastructureCard";
import cpanel from "../../img/cpanel.svg";
const InfraWeb = (props) => {
  return (
    <section className="infra-sec">
      <div className="infra-con container">
        <div class="infra-side-by-side">
          <div class="infra-section">
            <h4>
              {props.head1}
              <br />
              {props.head2}
            </h4>
            <h5>{props.text}</h5>
            <div className="infra-box">
              <h3>{props.title}</h3>
              <p>{props.text2}</p>
            </div>
            <h4>{props.subhead}</h4>
            <div className="left-infra-btn">
              <div className="infra-c1">
                <InfrastructureCard />
                <InfrastructureCard />
              </div>
              <div className="infra-c2">
                <InfrastructureCard />
                <InfrastructureCard />
              </div>
            </div>
          </div>
          <div class="infra-section">
            {/* <!-- Content for the second section --> */}
            <img src={props.infra_img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfraWeb;
