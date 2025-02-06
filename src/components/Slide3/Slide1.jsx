import React from "react";
import "./slide.css";

const Slide1 = ({img, title1, title2, price1, price2}) => {
  return (
    <div className="slide-1">
      <div class="row">
        <div class="col-lg-6">
          <div className="left-box">
            <h2>{title1}</h2>
            <img src={img} alt="RENIE_ONE" />
          </div>
        </div>
        <div class="col-lg-6">
          <h2 className="text-right">{title2}</h2>
          <div className="renio-button">
            <button className="active">Renie one</button>
            <button>Renie Two</button>
            <button>Renie Maxi</button>
            <button>Renie Mini</button>
          </div>
          <div className="renio-grid">
            <h5>Available Waste Streams</h5>
            <div class="renio-grid-system">
              <div>
                <img src="/assets/Vector.png" />
                <h6>Plastic Bottles</h6>
              </div>
              <div>
                <img src="/assets/Vector-2.png" />
                <h6>Plastic Bottles</h6>
              </div>
              <div>
                <img src="/assets/Vector-3.png" />
                <h6>Plastic Bottles</h6>
              </div>
              <div>
                <img src="/assets/Vector-4.png" />
                <h6>Plastic Bottles</h6>
              </div>
              <div>
                <img src="/assets/Vector-5.png" />
                <h6>Plastic Bottles</h6>
              </div>
              <div>
                <img src="/assets/Vector-6.png" />
                <h6>Plastic Bottles</h6>
              </div>
            </div>
          </div>
          <div className="renio-footer">
            <h5 className="text-center text-white mt-5 mb-3">Pricing</h5>
            <div class="renio-footer-div">
              <div>
                <h6>Standard Design</h6>
                <h5>{price1} AED</h5>
              </div>
              <div>
                <h6>Custom Design</h6>
                <h5>{price2} AED</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
