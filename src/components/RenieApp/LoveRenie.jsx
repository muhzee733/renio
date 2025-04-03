"use client";
import React from "react";
import H2 from "../Typography/H2";
import H4 from "../Typography/H4";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LoveRenie = () => {
  return (
    <div className="renie-love">
      <div className="container-xl">
        <div className="row text-center">
          <div className="col-12">
            <H2 title="Why You’ll Love ❤︎ Renie Nexus" />
          </div>
        </div>

        <div className="row mt-5 d-flex justify-content-center align-items-stretch text-center custom-data-svg">
          {/* Feature 1 */}
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center">
            <div className="media-container">
              <DotLottieReact
                src="/assets/animate-svg-1.json"
                loop
                autoplay
                style={{ width: "100%", height: "300px", marginBottom: "20px" }}
              />
            </div>
            <H4 title="No vouchers or discounts—just real, valuable rewards!" />
          </div>

          {/* Feature 2 (SVG) */}
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center">
            <div className="media-container">
              <object
                data="/assets/animate-svg-2.svg"
                type="image/svg+xml"
                className="svg-image"
                style={{ width: "100%", height: "300px", marginBottom: "20px" }}
              ></object>
            </div>
            <H4 title="Easily locate the nearest Renie Bin and navigate to it." />
          </div>

          {/* Feature 3 */}
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center">
            <div className="media-container">
              <DotLottieReact
                src="/assets/animate-svg-3.json"
                loop
                autoplay
                style={{ width: "100%", height: "300px", marginBottom: "20px" }}
              />
            </div>
            <H4 title="No registration & downloads needed." />
          </div>

          {/* Feature 4 */}
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center">
            <div className="media-container">
              <DotLottieReact
                src="/assets/animate-svg-2.json"
                loop
                autoplay
                style={{ width: "100%", height: "300px", marginBottom: "20px" }}
              />
            </div>
            <H4 title="Track Every Bottle, Measure Your Impact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveRenie;
