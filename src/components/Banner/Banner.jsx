import React from "react";
import BrandSlider from "../BrandSlider";

const Banner = () => {
  return (
    <div className="main-banner">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 custom-text">
            <h1>Turn your waste</h1>
            <h1>
              into <span className="purple">revenue</span>
            </h1>
            <button className="btn-2">How it works</button>
          </div>
          <div className="col-lg-6 col-md-12">
            <div class="box-inner">
              <div className="tool">
                <span>Recycled Waste Items</span>
                <div className="d-flex align-items-center gap-2">
                  <span style={{color: "#5C4099"}}>432</span>
                  <img src="/assets/arrow.png" alt="arrow" />
                </div>
              </div>
              <img src="/assets/bin.png" alt="banner" className="banner-img" />
              <img
                src="/assets/mobile.png"
                alt="mobile"
                className="mobile-img"
              />
              <iframe src="/assets/Waste_income.svg" className="banner-svg"></iframe>

            </div>
          </div>
        </div>
        <BrandSlider />
      </div>
    </div>
  );
};

export default Banner;
