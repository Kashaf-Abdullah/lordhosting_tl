import React from "react";
import desktop from ".././img/desktop.png";
import VPS_standardCard from "./Cards/VPS_standardCard";
import desk from '../img/desktop.png'
const VPS_standard = () => {
  return (
    <div className="container-fluid vps-sec">
      <VPS_standardCard  img_vps={desk} stand="VPS STANDARD" ram="4GB" ghz1="1VCPU" ghz2="3.6GHz" stockage="20GO" band="350 Mbp/s" price="6"/>
      <VPS_standardCard   img_vps={desk} stand="VPS STANDARD" ram="4GB" ghz1="1VCPU" ghz2="3.6GHz" stockage="20GO" band="350 Mbp/s" price="6"/>
      <VPS_standardCard  img_vps={desk} stand="VPS STANDARD" ram="4GB" ghz1="1VCPU" ghz2="3.6GHz" stockage="20GO" band="350 Mbp/s" price="6"/>
      <VPS_standardCard img_vps={desk} stand="VPS STANDARD" ram="4GB" ghz1="1VCPU" ghz2="3.6GHz" stockage="20GO" band="350 Mbp/s" price="6"/>
    </div>
  );
};

export default VPS_standard;
