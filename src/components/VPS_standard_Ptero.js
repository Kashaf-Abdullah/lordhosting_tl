import React from "react";
import desktop from ".././img/desktop.png";
import VPS_standardCard from "./Cards/VPS_standardCard";
import pterod from '../img/pterry1.svg'
const VPS_standard_Ptero = () => {
  return (
    <div className="container-fluid vps-sec">
      <VPS_standardCard img_vps={pterod} stand="GP1-XS" ram="8 GB" ghz1="2 VCORES" ghz2="4.0GHz" stockage="50 GO" band="500 Mbp/s" price="8.95"/>
      <VPS_standardCard  img_vps={pterod} stand="GP1-XS" ram="8 GB" ghz1="2 VCORES" ghz2="4.0GHz" stockage="95 GO" band="750 Mbp/s" price="16.99"/>
      <VPS_standardCard  img_vps={pterod} stand="GP1-XS" ram="8 GB" ghz1="2 VCORES" ghz2="4.0GHz" stockage="125 GO" band="1000 Mbp/s" price="25.99"/>
      <VPS_standardCard  img_vps={pterod} stand="GP1-XS" ram="8 GB" ghz1="2 VCORES" ghz2="4.0GHz" stockage="175 GO" band="1000 Mbp/s" price="35.99"/>
      <VPS_standardCard  img_vps={pterod} stand="GP1-XS" ram="8 GB" ghz1="2 VCORES" ghz2="4.0GHz" stockage="200 GO" band="1000 Mbp/s" price="65.99"/>
    </div>
  );
};

export default VPS_standard_Ptero;
