import React from 'react'
import rust from '../img/rustlogo.png'
import minecraft from '../img/minecraft.svg'
import terraria from '../img/terrarialogo.svg'
const Offer_Pterodactyl = () => {
  return (
    <div>
    <div className="offer-pterod-heading">
        <h3
          style={{
          textAlign: "center",
          overflowY: "hidden",
          marginBottom: "42px",
          fontSize: "2rem",
          fontWeight: "600",
          color: "var(--bluegrey)",
        }}>Grâce à nos offres Pterodactyl, <br /> hébergez vos serveurs de jeux favoris</h3>
    </div>
      
      <div className="offer-pterod-logo">
        <img src={rust} alt="" />
        <img src={minecraft} alt="" />
        <img src={terraria} alt="" />
      </div>
      <div className="off-pterod-btn">
        <button className="off-pterod-button">Commencer &#x2192;</button>
      </div>
    </div>
  )
}

export default Offer_Pterodactyl
