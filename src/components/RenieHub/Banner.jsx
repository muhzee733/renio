import React from "react";
import BrandSlider from "../BrandSlider";

const Banner = () => {
  return (
    <>
      <div class="reniehub position-relative">
        <div class="reniehub-wrapper">
          <div class="container-xl">
            <div class="row">
              <div class="col-lg-12">
                <div className="renie-box-wrapper position-relative">
                  <div>
                    <h1>Earn income while you make a traceable impact</h1>
                    <p>
                      Our innovative platform makes it possible to generate a
                      passive income from data monetization of waste
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <img
                      src="/assets/hub.webp"
                      alt="renie-hub"
                      className="mb-5"
                    />
                    {/* <img
                      src="/assets/reniehub/renie-mobile.webp"
                      alt="renie-hub"
                      className="renie-mobile-banner"
                    /> */}
                  </div>
                </div>
                <BrandSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
