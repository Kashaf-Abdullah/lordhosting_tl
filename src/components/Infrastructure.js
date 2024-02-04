import React from "react";

import InfraWeb from "./Cards/InfraWeb";
import cpanel from ".././img/cpanel.svg";
const Infrastructure = () => {
  return (
    <InfraWeb
      head1="Une infrastructure optimale pour vos"
      head2="projets web."
      text="Profitez des fonctionnalités essentielles pour héberger votre site internet, de conseils pour lancer votre projet et bien plus !"
      title="CPANEL"
      text2="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme.
 Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."
      subhead="Inclus dans nos offres web"
      infra_img={cpanel}
    />
  );
};

export default Infrastructure;
