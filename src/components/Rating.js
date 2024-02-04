import React from "react";
import admin from "../../src/img/admin.png";
const Rating = () => {
  return (
    <section id="rating-sec">
      <h3>Ils ont trouvé le service idéal</h3>
      <h2>
        <span>&#9733;</span>
        <span> TrustPilot</span>
      </h2>
      <div className="rating-con container">
        <div className="rating-card">
          <div className="rating-c">
            <img src={admin} alt="" />
            <h6>Aragon</h6>
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">
                5 stars
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">
                4 stars
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">
                3 stars
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">
                2 stars
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">
                1 star
              </label>
            </div>
            <p>
              <i>"Je suis satisfait des services LordHosting"</i>
            </p>
          </div>
        </div>
        <div className="rating-card">
          <div className="rating-c">
            <img src={admin} alt="" />
            <h6>Aragon</h6>
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">
                5 stars
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">
                4 stars
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">
                3 stars
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">
                2 stars
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">
                1 star
              </label>
            </div>
            <p>
              <i>"Je suis satisfait des services LordHosting"</i>
            </p>
          </div>
        </div>
        <div className="rating-card">
          <div className="rating-c">
            <img src={admin} alt="" />
            <h6>Aragon</h6>
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">
                5 stars
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">
                4 stars
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">
                3 stars
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">
                2 stars
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">
                1 star
              </label>
            </div>
            <p>
              <i>"Je suis satisfait des services LordHosting"</i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
