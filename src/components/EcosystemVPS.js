import React from "react";
import EcoSysCard from "./Cards/EcoSysCard";
import globe from ".././img/globe.svg";
const EcosystemVPS = () => {
  return (
    <div className="ecosys-sec container-fluid">
      <h3
        style={{
          textAlign: "center",
          overflowY: "hidden",
          marginBottom: "42px",
          fontSize: "2rem",
          fontWeight: "600",
          color: "var(--darkblue)",
        }}
      >
        L'ecosystème VPS LordHosting
      </h3>

      <div className="ecosys-con container">
        <div className="ecosys-r1">
          <EcoSysCard />
        </div>
        <div className="ecosys-r2">
          <EcoSysCard />

          <img src={globe} alt="" />
          <EcoSysCard />
        </div>
        <div className="ecosys-r3">
          <EcoSysCard />
        </div>
      </div>
    </div>
  );
};

export default EcosystemVPS;
