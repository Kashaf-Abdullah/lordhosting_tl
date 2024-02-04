import React from 'react'

import NavSocialLink from "../components/NavSocialLink/NavSocialLink.js";
import Navbar from "../components/Navbar/Navbar.js";
import Introbrokeprotocol from '../components/Intro-brokeprotocol.js';
import Broke_pro_video from '../components/Broke_pro_video.js';
import Broke_pro_panel from '../components/Broke_pro_panel.js';
import About from "../components/About.js";
import FAQs from "../components/FAQs.js";
import Rating from "../components/Rating.js";
import Offer from "../components/Offer.js";
import Footer from "../components/Footer.js";

const PageBrokeProtocol = () => {
  return (
    <div>
      <NavSocialLink/>
      <Navbar/>
      <Introbrokeprotocol/>
      <Broke_pro_video/>
      <Broke_pro_panel/>
      <About />
      <FAQs />
      <Rating />
      <Offer />
      <Footer />

    </div>
  )
}

export default PageBrokeProtocol
