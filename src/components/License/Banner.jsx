import React from "react";
import H1 from "../Typography/H1";
import MovingSlider from "../MovingSlider";

const Banner = () => {
  return (
    <>
      <section className="license">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 ">
              <H1 title={"Start earning $500 per ton of recycled waste"} />
              <p className="text-dark mt-3">
                As a licensee you earn $500 for every ton of verified recyclable
                waste collected and recycled through our technology without
                managing the waste itself.
              </p>
              <div className="text-center text-md-start">
                <button
                  className="btn-2"
                  onClick={() => (window.location.href = "/renielicense")}
                >
                  Explore the Full demo
                </button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="position-relative">
                <figure className="license-img">
                  <img src="/assets/renie-update/licensing-2.webp" />
                </figure>
              </div>
            </div>
            <MovingSlider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
