import React from "react";
import NavSocialLink from "../components/NavSocialLink/NavSocialLink";
import Navbar from "../components/Navbar/Navbar";
import IntroServGame from "../components/IntroServGame";
import ExtensionGame from "../components/ExtensionGame";
import ConnectiviteSerGame from "../components/ConnectiviteSerGame";
import EcosystemVPS from "../components/EcosystemVPS";
import VPS_standard from "../components/VPS_standard";
import SwitchToggle from "../components/SwitchToggle";
import SysExploitGame from "../components/SysExploitGame";
import Characteristic_TechGame from "../components/Characteristic_TechGame";
import About from "../components/About";
import FAQs from "../components/FAQs";
import Rating from "../components/Rating";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
const PageServiceGame = () => {
  return (
    <div>
      <NavSocialLink />
      <Navbar />
      <IntroServGame />
      <h3
        style={{ textAlign: "center", fontWeight: "600", color: "var(--grey)" }}
      >
        Nos offres revendeur wen
      </h3>
      <SwitchToggle />
      <VPS_standard />
      <SysExploitGame />
      <ExtensionGame />
      <ConnectiviteSerGame />
      <EcosystemVPS />
      <Characteristic_TechGame />
      <About />
      <FAQs />
      <Rating />
      <Offer />
      <Footer />
    </div>
  );
};

export default PageServiceGame;
