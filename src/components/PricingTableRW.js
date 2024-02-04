import React from "react";
import PricingTableCard from "./Cards/PricingTableCard";

const PricingTableRW = () => {
  return (
    <div id="price">
      <PricingTableCard
        head="Starter"
        subhead="Tout le nécessaire au meilleur prix"
        price="4,49€ / mois"
        details="16,68€ Annuel"
        h="none"
        bot="0px"
        bcolor="#bfddff"
      />
      <PricingTableCard
        head="Startup"
        subhead="Tout le nécessaire au meilleur prix"
        price="10.99€ / mois"
        details="41,88€ Annuel"
        h=""
        bot="10px"
        bcolor="#bfddff"
      />
      <PricingTableCard
        head="Professionnel"
        subhead="Tout le nécessaire au meilleur prix"
        price="27.99€ / mois"
        details="59,88€ Annuel"
        h="none"
        bot="0px"
        bcolor="#bfddff"
      />
      <PricingTableCard
        head="Enterprise"
        subhead="Tout le nécessaire au meilleur prix"
        price="53.99€ / mois"
        details="119,88€ Annuel"
        h="none"
        bot="0px"
        bcolor="#bfddff"
      />
    </div>
  );
};

export default PricingTableRW;
