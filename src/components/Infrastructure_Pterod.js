import React from "react";

import InfraWeb from "./Cards/InfraWeb";
import cpanel from ".././img/pterod_screen.png";
const Infrastructure_Pterod = () => {
  return (
    <InfraWeb
      head1="Gérez votre serveur de jeu grâce au"
      head2="panel Pterodactyl"
      text="Profitez d'un panel intuitif pour gérer les actions du quotidien sur votre serveur de jeu."
      title="C'est quoi, Pterodactyl?"
      text2="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme.
 Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."
      subhead="Inclus dans nos offres Pterodactyle"
      infra_img={cpanel}
    />
  );
};

export default Infrastructure_Pterod;
