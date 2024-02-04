import React from "react";
import NavSocialLink from "../components/NavSocialLink/NavSocialLink.js";
import Navbar from "../components/Navbar/Navbar.js";
import PricingTable from "../components/PricingTable.js";
import Installation from "../components/Installation.js";
import Infrastructure from "../components/Infrastructure.js";
import Ressearch from "../components/Ressearcher.js";
import About from "../components/About.js";
import FAQs from "../components/FAQs.js";
import Rating from "../components/Rating.js";
import Offer from "../components/Offer.js";
import Footer from "../components/Footer.js";
import IntroWebDomain from "../components/IntroWebDomain.js";
import SwitchToggle from "../components/SwitchToggle.js";
const PageWebDomain = () => {
  return (
    <div>
      <NavSocialLink />
      <Navbar />
      <IntroWebDomain />
      <Ressearch />
      <SwitchToggle />
      <PricingTable />
      <Infrastructure />
      <Installation />
      <About />
      <FAQs />
      <Rating />
      <Offer />
      <Footer />
    </div>
  );
};

export default PageWebDomain;
