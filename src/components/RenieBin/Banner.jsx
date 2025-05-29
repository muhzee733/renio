import React from "react";
import H1 from "../Typography/H1";
import P from "../Typography/P";
import MovingSlider from "../MovingSlider";

const Banner = ({ canvasRef }) => {
  return (
    <div className="reniebin">
      <div className="reniebin-wrapper">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-12">
              <div className="renie-main-content">
                <H1 title="AI-Powered Smart Bins that turn waste into profits" />
                <P
                  title={
                    "Renie Bins are smart, low-cost devices that capture recyclables, extract data, and connect directly to our digital platforms for real-time tracking, ESG reporting, and monetization"
                  }
                />
                <button className="btn-2">Explore the full demo</button>
                <div className="canvas-container">
                  <img src="/assets/bin.webp" alt="Renie Bin" />
                </div>
              
                <div className="banner-boxes">
                  <div className="d-flex align-items-center gap-3">
                    <h6>
                      Accurate <br />
                      verification
                    </h6>
                    <img src="/assets/double-check.webp" alt="verification" />
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <h6>
                      Fraud
                      <br />
                      detection
                    </h6>
                    <img
                      src="/assets/double-check-3.webp"
                      alt="fraud detection"
                    />
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <h6>
                      Data
                      <br />
                      collection
                    </h6>
                    <img
                      src="/assets/double-check-1.webp"
                      alt="data collection"
                    />
                  </div>
                </div>
                <div className="moving-logos"><MovingSlider /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
