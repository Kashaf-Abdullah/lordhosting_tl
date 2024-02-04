import React from "react";
import InstallationsSection from "./Cards/InstallationsSection";
import serverrw from "../img/rw_Server.svg";
const CertificateSSLRW = () => {
  return (
    <div className="container">
      <InstallationsSection
        head="Inclus avec votre domaine"
        sh1="Certificat SSL gratuit"
        t1="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."
        sh2="Inclus 2"
        t2="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."
        in_img={serverrw}
      ></InstallationsSection>
    </div>
  );
};

export default CertificateSSLRW;
