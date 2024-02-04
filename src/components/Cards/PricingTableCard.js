import React from "react";

const PricingTableCard = (props) => {
  return (
    <>
      <div
        class="plan"
        style={{
          position: "relative",
          bottom: props.bot,
          backgroundColor: props.bcolor,
        }}
      >
        <h6
          class="font-weight-bold text-uppercase text-white rounded py-2 px-3  small plan-recom"
          style={{ display: props.h }}
        >
          Best Seller
        </h6>

        <div class="plan-inner" style={{ backgroundColor: props.bcolor }}>
          <div className="plan-head">
            <h4>{props.head}</h4>
            <p>{props.subhead}</p>
            <h3>{props.price}</h3>
            <p>{props.detail}</p>
            <button>Acheter</button>
          </div>
          <hr></hr>
          <div className="plan-det">
            <p>Lorem ipsum dolor sit.</p>
            <ul>
              <li>Protection anti-ddos incluse</li>
              <li>Protection anti-ddos incluse</li>
              <li>Protection anti-ddos incluse</li>
              <li>Protection anti-ddos incluse</li>
              <li>Protection anti-ddos incluse</li>
              <li>Protection anti-ddos incluse</li>
              <li>Protection anti-ddos incluse</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTableCard;
