import React from "react";
import installation from "../img/installation.svg";
import InstallationsSection from "./Cards/InstallationsSection";
const Installation = () => {
  return (
    <div class="container">
      <InstallationsSection
        head="Softaculous"
        sh1="Pour des installations rapides"
        t1="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."
        sh2="Pour des installations rapides"
        t2="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."
        in_img={installation}
      ></InstallationsSection>
    </div>
  );
};

export default Installation;
