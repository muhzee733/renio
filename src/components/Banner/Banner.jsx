import React from "react";
import BrandSlider from "../BrandSlider";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Banner = () => {
  const scrollToSection = () => {
    const section = document.getElementById("how-it-works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="main-banner">
      <div className="container-xl ">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 custom-text">
            <h1>Turn your waste</h1>
            <h1>
              into <span className="purple">revenue</span>
            </h1>
            <button className="btn-2" onClick={scrollToSection}>
              How it works
            </button>
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
              {/* <iframe
                src="/assets/Waste_income.svg"
                className="banner-svg"
              ></iframe> */}
              <object
                data="/assets/Waste_income.svg"
                className="banner-svg"
                type="image/svg+xml"
              ></object>
            </div>
          </div>
        </div>
        <BrandSlider />
        <DotLottieReact
          src="/assets/downarrow.json"
          loop
          autoplay
          className="lottie-animation"
        />
      </div>
    </div>
  );
};

export default Banner;
