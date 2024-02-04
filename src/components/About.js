import React from "react";
const About = () => {
  return (
    <section className="about">
      <div className="about-overlay"></div>
      <div className="about-sec container">
        <div className="about-con">
          <h2>La qualité LordHosting</h2>

          <h5>
            Après plus de 2 ans d'existence, LordHosting vous accompagne dans
            vos projets.
          </h5>
          <p>
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset shee
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <div className="about-btns">
            <button class="button discover-button">
              Découvrir les serveurs
            </button>
            <button class="button documentation-button">Documentation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
