import React from 'react'
import bp_title from '../img/brokeproto-title.svg'
const Broke_pro_video = () => {
  return (
    <div className=" bp-video-sec container-fluid">
      <div className="bp-video-con container">
        <h2 >
Votre futur panel de gestion en video</h2>
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/your-video-id" frameborder="0" allowfullscreen></iframe>
</div>
<div className="bp-vid-recomm">
    <div className="bp-vid-rec-head">
        <h2>Un serveur de jeu, recommandé par Broke Protocol</h2>
   <img src={bp_title} alt="" />
    </div>

    <p><strong>Broke Protocol</strong>  recommande <strong> LordHosting</strong> en matière d'hébergement  pour la fiabilité et la stabilité de nos serveurs.</p>
    <br />
    <p>Nos serveurs sont maintenus chaque jour dans le cadre de notre  engagement qualité.
</p>
</div>
      </div>
    </div>
  )
}

export default Broke_pro_video
