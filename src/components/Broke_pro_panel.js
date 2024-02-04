import React from 'react'
import andrioslogo  from '../img/andrioslogo.png'
import steamlogo from '../img/Steamlogo.svg'
const Broke_pro_panel = () => {
  return (
    <div className='bp-panel-sec container-fluid'>
    <div className="bp-panel-con container">
        <h2>Jouez sur des serveurs de qualité, ou que vous soyez</h2>
    <p>Nos serveurs <strong> Broke Protocol </strong> sont disponibles sur vos appareils favoris
</p>

<div className="bp-panel-img">
    <img src={andrioslogo} alt="" />
    <img src={steamlogo} alt="" />

</div>
   <p>Nos serveurs sont prêt à accueillir vos projets ! Qu'attendez vous?
</p>
 <div className="bp-panel-btn">
              <button class="button pb-panel-button">
              Louer mon serveur &#x2192;
              </button>
            </div>
    </div>
      
    </div>
  )
}

export default Broke_pro_panel
