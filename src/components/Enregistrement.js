import React from "react";
import EnregisterCards from "./Cards/EnregisterCards";

const Enregistrement = () => {
  return (
    <div className="container-fluid enregis-con">
      <div className="container enregis-sec">
        <h5>Enregistrement de domaine rapide</h5>
        <h2>
          Quelques extensions de domaine disponibles pour héberger votre site
          internet
        </h2>
        <div className="enreg-box">
          <EnregisterCards
            head="xyz"
            subhead="€9,99 EUR"
            bccolor="var(--lightblue)"
            hcolor="white"
            shcolor="white"
            ibcolor="white"
            icolor="var(--lightblue)"
          />
          <EnregisterCards
            head=".net"
            subhead="€9,99 EUR"
            bccolor="var(--lightgrey)"
            hcolor="var(--darkblue)"
            shcolor="var(--darkblue)"
            ibcolor="var(--darkblue)"
            icolor="var(--lightgrey)"
          />
          <EnregisterCards
            head=".fr"
            subhead="€9,99 EUR"
            bccolor="var(--lightblue)"
            hcolor="white"
            shcolor="white"
            ibcolor="white"
            icolor="var(--lightblue)"
          />
          <EnregisterCards
            head=".com"
            subhead="€9,99 EUR"
            bccolor="var(--lightgrey)"
            hcolor="var(--darkblue)"
            shcolor="var(--darkblue)"
            ibcolor="var(--darkblue)"
            icolor="var(--lightgrey)"
          />
          <EnregisterCards
            head=".org"
            subhead="€9,99 EUR"
            bccolor="var(--lightblue)"
            hcolor="white"
            shcolor="white"
            ibcolor="white"
            icolor="var(--lightblue)"
          />

          <EnregisterCards
            head=".pro "
            subhead="€9,99 EUR"
            bccolor="var(--lightgrey)"
            hcolor="var(--darkblue)"
            shcolor="var(--darkblue)"
            ibcolor="var(--darkblue)"
            icolor="var(--lightgrey)"
          />
          <EnregisterCards
            head=".io"
            subhead="€9,99 EUR"
            bccolor="var(--lightblue)"
            hcolor="white"
            shcolor="white"
            ibcolor="white"
            icolor="var(--lightblue)"
          />
          <EnregisterCards
            head=".eu"
            subhead="€9,99 EUR"
            bccolor="var(--lightgrey)"
            hcolor="var(--darkblue)"
            shcolor="var(--darkblue)"
            ibcolor="var(--darkblue)"
            icolor="var(--lightgrey)"
          />
          <EnregisterCards
            head=".us"
            subhead="€9,99 EUR"
            bccolor="var(--lightblue)"
            hcolor="white"
            shcolor="white"
            ibcolor="white"
            icolor="var(--lightblue)"
          />
          <EnregisterCards
            head=".ca"
            subhead="€9,99 EUR"
            bccolor="var(--lightgrey)"
            hcolor="var(--darkblue)"
            shcolor="var(--darkblue)"
            ibcolor="var(--darkblue)"
            icolor="var(--lightgrey)"
          />

          <EnregisterCards
            head=".click "
            subhead="€9,99 EUR"
            bccolor="var(--lightblue)"
            hcolor="white"
            shcolor="white"
            ibcolor="white"
            icolor="var(--lightblue)"
          />
          <EnregisterCards
            head=".sarl"
            subhead="€9,99 EUR"
            bccolor="var(--lightgrey)"
            hcolor="var(--darkblue)"
            shcolor="var(--darkblue)"
            ibcolor="var(--darkblue)"
            icolor="var(--lightgrey)"
          />
          <EnregisterCards
            head=".be"
            subhead="€9,99 EUR"
            bccolor="var(--lightblue)"
            hcolor="white"
            shcolor="white"
            ibcolor="white"
            icolor="var(--lightblue)"
          />
          <EnregisterCards
            head=".name"
            subhead="€9,99 EUR"
            bccolor="var(--lightgrey)"
            hcolor="var(--darkblue)"
            shcolor="var(--darkblue)"
            ibcolor="var(--darkblue)"
            icolor="var(--lightgrey)"
          />
          <EnregisterCards
            head=".me"
            subhead="€9,99 EUR"
            bccolor="var(--lightblue)"
            hcolor="white"
            shcolor="white"
            ibcolor="white"
            icolor="var(--lightblue)"
          />
        </div>
      </div>
    </div>
  );
};

export default Enregistrement;
