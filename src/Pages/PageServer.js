
import React from 'react'

import NavSocialLink from "../components/NavSocialLink/NavSocialLink.js";
import Navbar from "../components/Navbar/Navbar.js";
import PricingServer from '../components/PricingServer.js';
import IntroServer from '../components/IntroServer.js';
import IntroServiceCloud from '../components/IntroServiceCloud.js';
import Server_Chars from '../components/Server_Chars.js';
import SwitchToggle from '../components/SwitchToggle.js';
import About from "../components/About.js";
import FAQs from "../components/FAQs.js";
import Rating from "../components/Rating.js";
import Offer from "../components/Offer.js";
import Footer from "../components/Footer.js";
const PageServer = () => {
  return (
    <div>
      <NavSocialLink />
      <Navbar />
      <IntroServer/>
      <h3
        style={{ textAlign: "center", fontWeight: "600", color: "var(--grey)" }}
      >
     Nos serveurs dédiés
      </h3>
      <SwitchToggle />
      <PricingServer/>
      <Server_Chars/>
      <IntroServiceCloud/>
      <About />
      <FAQs />
      <Rating />
      <Offer />
      <Footer />
    </div>
  )
}

export default PageServer
