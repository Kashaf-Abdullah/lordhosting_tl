import React from "react";
import PricingTableCard from "./Cards/PricingTableCard";

const PricingTable = () => {
  return (
    <div id="price">
      <PricingTableCard
        head="Simple"
        subhead="Tout le nécessaire au meilleur prix"
        price="1,39€ / mois"
        details="16,68€ Annuel"
        h="none"
        bot="0px"
      />
      <PricingTableCard
        head="Standard"
        subhead="Tout le nécessaire au meilleur prix"
        price="3,49€ / mois"
        details="41,88€ Annuel"
        h=""
        bot="10px"
      />
      <PricingTableCard
        head="Amélioré"
        subhead="Tout le nécessaire au meilleur prix"
        price="4.99€ / mois"
        details="59,88€ Annuel"
        h="none"
        bot="0px"
      />
      <PricingTableCard
        head="Pro"
        subhead="Tout le nécessaire au meilleur prix"
        price="9.99€ / mois"
        details="119,88€ Annuel"
        h="none"
        bot="0px"
      />
    </div>
  );
};

export default PricingTable;
