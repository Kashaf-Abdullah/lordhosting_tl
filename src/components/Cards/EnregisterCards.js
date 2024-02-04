import React from "react";

const EnregisterCards = (props) => {
  return (
    <div className="er-b b1" style={{ backgroundColor: props.bccolor }}>
      <i style={{ backgroundColor: props.ibcolor }}>
        <span style={{ color: props.icolor }}>i</span>
      </i>
      <h3 style={{ color: props.hcolor }}>{props.head}</h3>
      <h4 style={{ color: props.shcolor }}>{props.subhead}</h4>
      <button>ENREGISTRER</button>
    </div>
  );
};

export default EnregisterCards;
