import React from "react";
import MovingSlider from "../MovingSlider";

const Banner = () => {
  return (
    <div className="main-banner">
      <div className="container-xl">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 custom-text">
            <h1>TURN WASTE </h1>
            <h1>
              INTO <span className="purple">REVENUE</span>
            </h1>
            <p>
              Through our AI-powered smart bins and digital platforms, Renie
              tracks every drop, verifies impact, monetizes data, and rewards
              your organization up to $500 per ton recycled.
            </p>
            <button className="btn-2" onClick={() => window.location.href = '/renielicense'}>Explore the Full demo</button>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="box-inner">
              <div className="tool">
                <span>Recycled waste items</span>
                <div className="d-flex align-items-center gap-2">
                  <span style={{ color: "#5C4099" }}>432</span>
                  <img src="/assets/arrow-1.webp" alt="arrow" />
                </div>
              </div>
              <img src="/assets/bin.webp" alt="banner" className="banner-img" />
              <img
                src="/assets/mobile.webp"
                alt="mobile"
                className="mobile-img"
              />
              <object
                data="/assets/Waste_income.svg"
                className="banner-svg"
                type="image/svg+xml"
              ></object>
            </div>
          </div>
        </div>
        {/* <BrandSlider /> */}
        <MovingSlider />
      </div>
    </div>
  );
};

export default Banner;
