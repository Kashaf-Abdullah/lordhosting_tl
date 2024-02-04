import React from "react";
import InfraWeb from "./Cards/InfraWeb";
import panel from ".././img/panelrw.png";
const InfrastructureRW = () => {
  return (
    <InfraWeb
      head1="Une solution optimale pour vos"
      head2=" infrastructures web"
      text="Profitez des fonctionnalités essentielles pour revendre vos solutions web, de conseils pour lancer votre projet et bien plus !"
      title="Monitoring Plesk"
      text2="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme.Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."
      subhead="Inclus dans nos offres revendeur web"
      infra_img={panel}
    />
  );
};

export default InfrastructureRW;
