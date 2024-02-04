import React from 'react'

import NavSocialLink from "../components/NavSocialLink/NavSocialLink.js";
import Navbar from "../components/Navbar/Navbar.js";
import IntroWindow from '../components/IntroWindow.js';
import PricingTableWindow from '../components/PricingTableWindow.js';
import Chars_Window from '../components/Chars_Window.js';
import Certif_Window from '../components/Certif_Window.js';
import SwitchToggle from '../components/SwitchToggle.js';

import About from "../components/About";
import FAQs from "../components/FAQs";
import Rating from "../components/Rating";
import Offer from "../components/Offer";
import Footer from "../components/Footer";

const PageWindow= () => {
  return (
    <div>
      <NavSocialLink />
      <Navbar />
      <IntroWindow/>
      <h3
        style={{ textAlign: "center", fontWeight: "600", color: "var(--grey)" }}
      >
  Nos offres VPS Windows

      </h3>
      <SwitchToggle />
  <PricingTableWindow/>
  <Chars_Window/>
  <Certif_Window/>
  <About />
      <FAQs />
      <Rating />
      <Offer />
      <Footer />
    
    </div>
  )
}

export default PageWindow
