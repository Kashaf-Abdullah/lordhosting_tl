import React from "react";

import desktop from "../../img/desktop.png";
import ram from '../../img/ram_icon11.png'
import cpu from '../../img/cpu12.png'
import ssd from '../../img/ssd11.png'
import cable from '../../img/cable11.png'

const VPS_standardCard = (props) => {
  return (
    <div className="vps-con container">
      <div className="vps-stand vps-c">
        <img src={props.img_vps} alt="" width="64px" height="62px" />
        <h3 style={{margin:"0 33px 0 0",fontWeight:"700"}}>{props.stand}</h3>
      </div>
      <div className="vps-specs vps-c ">
        <div className="vps-gb vps-mid">
          <h5><img src={ram} alt="" width="15px" height="18px" /> {props.ram}</h5>
          <p>RAM DDR4</p>
        </div>
        <div className="vps-vcpu vps-mid">
          <h5><img src={cpu} alt="" width="15px"  height="18px"/>{props.ghz1}</h5>
          <p>{props.ghz2}</p>
        </div>
        <div className="vps-go vps-mid">
          <h5><img src={ssd} alt="" width="15px"  height="18px"/>{props.stockage}</h5>
          <p>STOCKAGE SSD</p>
        </div>
        <div className="vps-mbps vps-mid">
          <h5><img src={cable} alt="" width="15px"  height="18px"/>{props.band}</h5>
          <p>BANDE PASSANTE</p>
        </div>
      </div>
      <div className="vps-price vps-c">
        <h4>{props.price}€ / mois TTC</h4>
        <button className="button vps-btn">COMMANDER</button>
      </div>
    </div>
  );
};

export default VPS_standardCard;
