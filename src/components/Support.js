import React from "react";
import support from "../../src/img/support.png";
const Support = () => {
  return (
    <div className="supp-sec container">
      <div className="supp-card">
        <div className="sup-c s_card-1">
          <div className="supp-card-head">
            <img src={support} alt="" />
            <h4>Nos serveurs</h4>
          </div>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme.
          </p>
        </div>
        <div className="sup-c  s_card-2">
          <div className="supp-card-head">
            <img src={support} alt="" />
            <h4>Communauté</h4>
          </div>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme.
          </p>
        </div>
      </div>
      <div className="supp-card">
        <div className="sup-c  s_card-3">
          <div className="supp-card-head">
            <img src={support} alt="" />
            <h4>Sécurité</h4>
          </div>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme.
          </p>
        </div>

        <div className="sup-c  s_card-4">
          <div className="supp-card-head">
            <img src={support} alt="" />
            <h4>Support</h4>
          </div>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
