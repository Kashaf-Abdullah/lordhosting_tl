import React from "react";
import visa from "../../src/img/footer-icon.png";
import paypalsafe from "../../src/img/paysafe_icon.png";
import logo from "../../src/img/logo.png";
const Footer = () => {
  return (
    <div class="pg-footer">
      <div className="footer-overlay"></div>
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name"> Nos Offres</h2>
              <ul id="menu-get-started" class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Offers Cloud</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Offers Gaming</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Offers Web</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name"> LordHosting</h2>
              <ul id="menu-company" class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Documentation</a>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a href="#">Discord</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Mention legales</a>
                </li>
              </ul>
            </div>
            <div class="footer-menu">
              <ul id="menu-legal" class="footer-menu-list"></ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name"> Moyens de paiment</h2>
              <ul id="menu-quick-links" class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <a href="#">
                    <img src={visa} className="visa-icon" alt="" />
                  </a>
                </li>
                <li class=" menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <a href="#">
                    <img src={paypalsafe} className="paysafe-icon" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-call-to-action">
              <img src={logo} alt="" className="footer-logo" />
              <p class="footer-call-to-action-description">
                {" "}
                Lordhosting est une association sous le numéro rna suivant
                W941016871.
              </p>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="footer-copyright-wrapper">
            <p class="footer-copyright-text">
              <a class="footer-copyright-link" href="#" target="_self">
                {" "}
                2023 LordHosting{" "}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
