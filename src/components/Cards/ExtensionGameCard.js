import React from "react";

const ExtensionGameCard = (props) => {
  return (
    <div className="extentgm-card">
      <div className="extentgm-c">
        <h5>{props.head} </h5>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ExtensionGameCard;
