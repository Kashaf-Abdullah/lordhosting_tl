import React from "react";
import SwitchToggle from "../components/SwitchToggle";
import PricingTableRW from "../components/PricingTableRW";
import Navbar from "../components/Navbar/Navbar";
import NavSocialLink from "../components/NavSocialLink/NavSocialLink";
import InfraWeb from "../components/Cards/InfraWeb";
import CertificateSSLRW from "../components/CertificateSSLRW";
import About from "../components/About";
import FAQs from "../components/FAQs";
import Rating from "../components/Rating";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
import IntroRevendeurWeb from "../components/IntroRevendeurWeb";
import InfrastructureRW from "../components/InfrastructureRW";
const PageRevendeurWeb = () => {
  return (
    <div>
      <NavSocialLink />
      <Navbar />
      <IntroRevendeurWeb />
      <h3
        style={{ textAlign: "center", fontWeight: "600", color: "var(--grey)" }}
      >
        Nos offres revendeur wen
      </h3>
      <SwitchToggle />
      <PricingTableRW />
      <InfrastructureRW />
      <CertificateSSLRW />
      <About />
      <FAQs />
      <Rating />
      <Offer />
      <Footer />
    </div>
  );
};

export default PageRevendeurWeb;
