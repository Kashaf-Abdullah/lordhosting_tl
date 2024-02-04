import React from "react";
import newsticker from "../../src/img/new-sticker.png";

const Offer = () => {
  return (
    <section className="offer-sec">
      <div className="offer-detail container">
        <div className="off-sticker">
          <img src={newsticker} alt="new sticker" />
        </div>
        <div className="off-detail">
          <h3>Offre de bienvenue</h3>
          <p>
            Inscris toi dès maintenant et profite de 15% de réduction sur ta
            première commande en entrant le code promotionnel:
            <span>BEINVENUE</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
