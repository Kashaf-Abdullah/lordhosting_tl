import React from 'react'

import NavSocialLink from "../components/NavSocialLink/NavSocialLink.js";
import Navbar from "../components/Navbar/Navbar.js";
import Offer_Pterodactyl from '../components/Offer_Pterodactyl.js';
import CommPterod from '../components/Comm_Pterod.js';
import IntroPterod from '../components/IntroPterod.js';
import SwitchToggle from '../components/SwitchToggle.js';
import VPS_standard from '../components/VPS_standard.js';
import About from '../components/About.js';
import FAQs from '../components/FAQs.js';
import Rating from '../components/Rating.js';
import Offer from '../components/Offer.js';
import Footer from '../components/Footer.js';
import Infrastructure_Pterod from '../components/Infrastructure_Pterod.js';
import VPS_standard_Ptero from '../components/VPS_standard_Ptero.js';

const PagePterodactyl = () => {
  return (
    <div>
      <NavSocialLink />
      <Navbar />
      <IntroPterod/>
         <h3
        style={{ textAlign: "center", fontWeight: "600", color: "var(--grey)" }}
      >
        Nos offres revendeur wen
      </h3>
      <SwitchToggle />
     <VPS_standard_Ptero/>
      <Infrastructure_Pterod/>
      <Offer_Pterodactyl/>
      
      <About />
      <CommPterod/>
      <FAQs />
      <Rating />
      <Offer />
      <Footer />
    </div>
  )
}

export default PagePterodactyl
