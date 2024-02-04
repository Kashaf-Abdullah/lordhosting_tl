import React from 'react'
import brokeproto_title from '../img/brokeproto-title.svg'
import bp1 from '../img/brokeproto1.svg'
import bp2 from '../img/brokeproto2.svg'
import ToggleSwitch from './SwitchToggle'
import PricingServerCard from './Cards/PricingServerCard'
import PricingTableCard from './Cards/PricingTableCard'

const Introbrokeprotocol = () => {
  return (
    <div className="rw-Header-Section flex-container" id="wd-intro-section">
    
    <div className="wd-header-sec">
    <div className="wd-Headerr container">
      <div className="wd-left-header">
        <div className="wd-left-headerTxt">
          <span className="wd-left-desc-head">Serveurs gaming Broke Protocol</span>
          <span className="wd-left-desc-subhead">Le premier hébergeur Broke Protocol en France, recommandé
par les créateurs du jeu</span>
          <span>
            <p>into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset shee containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
          </span>

          <div className="wd-btn">
            <button class="button wd-intro-button">
              Découvrir les serveurs &#x2192;
            </button>
          </div>
        </div>
      </div>

      <div className="wd-right-header">
        <img src={brokeproto_title}></img>
      </div>
    </div>
  </div>


<div className="intro-choice">
  <h2>Choisissez la puissance de votre offre</h2>
  <div className="intro-choice-img">
    <img src={bp2} alt="" />
      <img src={bp1} alt="" />
  </div>
  <ToggleSwitch/>

  <div  id="price_ser">
       <PricingServerCard
       head="DÉDIÉ START"
       text="Tout le nécessaire au meilleur prix"
       price="90€ / mois TTC"
       process1="DUAL XEON E5"
       process2="2620 V2"
       stock1="2000 GO"
       stock2="SSD"
       mem1="256 GO"
       mem2="RAM DDR3 ECC"
       band="750 Mbps"
       det="Inclus avec votre serveur dédié"
       l1="Processeur Dual Xeon E5 2620 V2"
       l2="CPU 12c / 24 threads 2.6 GHz"
       l3="Bande passante 500Mpbs"
       l4=" Protection Anti DDOS"
       l5="Support"
       bcolor="rgba(0,0,0,0.2)"
       tcolor="white"

      />
       <PricingServerCard
       head="DÉDIÉ GAME"
       text="
Tout le nécessaire au meilleur prix"
       price="135€ / mois TTC"
       process1="XEON E5"
       process2="2670"
       stock1="1000 GO"
       stock2="SSD"
       mem1="128 GO"
       mem2="RAM DDR3 ECC"
       band="500 Mbps"
       det="Inclus avec votre serveur dédié"
       l1="Processeur Dual Xeon E5 2620 V2"
       l2="CPU 12c / 24 threads 2.6 GHz"
       l3="Bande passante 500Mpbs"
       l4=" Protection Anti DDOS"
       l5="Support"
       bcolor="rgba(0,0,0,0.2)"
       tcolor="white"
      />
       <PricingServerCard
      head="DÉDIÉ PRO"
       text="Tout le nécessaire au meilleur prix"
       price=" 165€ / mois TTC"
       process1="DUAL XEON E5"
       process2="2620 V2"
       stock1="2000 GO"
       stock2="SSD"
       mem1="256 GO"
       mem2="RAM DDR3 ECC"
       band="750 Mbps"
       det="Inclus avec votre serveur dédié"
       l1="Processeur Dual Xeon E5 2620 V2"
       l2="CPU 12c / 24 threads 2.6 GHz"
       l3="Bande passante 500Mpbs"
       l4=" Protection Anti DDOS"
       l5="Support"
       bcolor="rgba(0,0,0,0.2)"
       tcolor="white"
      
      />
     
    </div>
</div>
   <div className="wd-intro-svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,85.3C640,85,800,107,960,133.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>

      
    </div>
  )
}

export default Introbrokeprotocol
