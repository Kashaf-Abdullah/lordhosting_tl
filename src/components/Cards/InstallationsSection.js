import React from "react";

const InstallationsSection = (props) => {
  return (
    <div class="in-side-by-side">
      <div class="in-section ">
        <h2 className="in-head">{props.head}</h2>
        <div className="in-det">
          <h4>{props.sh1}</h4>
          <p>{props.t1}</p>
        </div>

        <div className="in-det">
          <h4>{props.sh2}</h4>
          <p>{props.t2}</p>
        </div>
      </div>

      <div class="in-section">
        <img src={props.in_img} alt="" />
      </div>
    </div>
  );
};

export default InstallationsSection;
