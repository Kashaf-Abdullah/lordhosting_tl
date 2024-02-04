import React from "react";
import InstallationsSection from "./Cards/InstallationsSection";
import laptop from "../img/laptop.png";
const Certif_Window = () => {
  return (
    <div className="container">
      <InstallationsSection
        head="Inclus dans nos offres"
        sh1="Protection Anti-ddos de 2.1 TBPS"
        t1="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."
        sh2="Réseau de 500 MPBS"
        t2="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."
        in_img={laptop}
      ></InstallationsSection>
    </div>
  );
};

export default Certif_Window;
