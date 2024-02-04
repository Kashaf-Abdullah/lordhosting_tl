import React from "react";
import About from "../components/About";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import NavSocialLink from "../components/NavSocialLink/NavSocialLink";
import Navbar from "../components/Navbar/Navbar";
import Offer from "../components/Offer";
import Rating from "../components/Rating";
import Ressearcher from "../components/Ressearcher";
import Services from "../components/Services";
import Support from "../components/Support";

const MainPage = () => {
  return (
    <>
      <NavSocialLink />
      <Navbar />
      <Intro />
      <Ressearcher />
      <Services />
      <About />
      <Support />
      <Connect />
      <Rating />
      <Offer />
      <Footer />
    </>
  );
};

export default MainPage;
