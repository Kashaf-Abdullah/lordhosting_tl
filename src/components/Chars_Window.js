import React from "react";
import Chars_TecCard from "./Cards/Chars_TecCard";

const Chars_Window = () => {
  return (
    <div className="chars-techgame-sec container-fluid">
      <h3
        style={{
          textAlign: "center",
          overflowY: "hidden",
          fontSize: "2rem",
          fontWeight: "700",
          color: "var(--white)",
        }}
      >
        Caractéristiques techniques de nos VPS KVM
      </h3>
      <div className="chars-tgame-con container">
       
        <Chars_TecCard head="La puissance du SSD Samsung 860 EVO" text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."/>
        <Chars_TecCard head="Processeurs Intel Xeon E5" text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."/>
        <Chars_TecCard head="Mémoire vive DDR4" text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."/>
        
         </div>
    </div>
  );
};

export default Chars_Window;
