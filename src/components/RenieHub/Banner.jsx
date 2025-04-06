import React from "react";
import BrandSlider from "../BrandSlider";
import H1 from "../Typography/H1";
import P from "../Typography/P";

const Banner = () => {
  return (
    <>
      <div className="reniehub position-relative">
        <div className="reniehub-wrapper">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-12">
                <div className="renie-box-wrapper position-relative">
                  <div>
                    <H1 title='Earn income while you make a traceable impact' />
                    <P title='Our innovative platform makes it possible to generate a
                      passive income from data monetization of waste' />
                  </div>
                  <div className="d-flex justify-content-center">
                    <img
                      src="/assets/hub.webp"
                      alt="renie-hub"
                      className="mb-5"
                      width={1000}
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
