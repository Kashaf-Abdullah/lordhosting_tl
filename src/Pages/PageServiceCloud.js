import React from "react";
import NavSocialLink from "../components/NavSocialLink/NavSocialLink.js";
import Navbar from "../components/Navbar/Navbar.js";
import IntroServiceCloud from "../components/IntroServiceCloud.js";
import SerCloudRessearch from "../components/SerCloudRessearch.js";
import CloudServices from "../components/CloudServices.js";
import TransferDomain from "../components/TransferDomain.js";
import Enregistrement from "../components/Enregistrement.js";
import CertificateSSL from "../components/CertificateSSL.js";
import About from "../components/About.js";
import FAQs from "../components/FAQs.js";
import Rating from "../components/Rating.js";
import Offer from "../components/Offer.js";
import Footer from "../components/Footer.js";
const PageServiceCloud = () => {
  return (
    <div>
      <NavSocialLink />
      <Navbar />
      <SerCloudRessearch />
      <IntroServiceCloud />
      <CloudServices />
      <Enregistrement />
      <TransferDomain />
      <CertificateSSL />
      <About />
      <FAQs />
      <Rating />
      <Offer />
      <Footer />
    </div>
  );
};

export default PageServiceCloud;
