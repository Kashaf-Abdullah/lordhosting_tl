import React from "react";
import ExtensionGameCard from "./Cards/ExtensionGameCard";

const ExtensionGame = () => {
  return (
    <section id="extensgam-sec">
      <h1>Extensions disponibles</h1>
      <div className="extentgm-con container">
        <ExtensionGameCard
          head="IPV4"
          text="into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset shee containing Lorem Ipsum passages, and more recently
with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
"
        />
        <ExtensionGameCard
          head="Stockage évolutif"
          text="into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset shee containing Lorem Ipsum passages, and more recently
with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
"
        />
        <ExtensionGameCard
          head="Commande"
          text="into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset shee containing Lorem Ipsum passages, and more recently
with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
"
        />
      </div>
      <div className="extentgm-btn">
        <button className="extentgm-button">Voir nos offres VPS KVM</button>
      </div>
    </section>
  );
};

export default ExtensionGame;
