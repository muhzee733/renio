import React from "react";
import H1 from "../Typography/H1";

const Banner = ({ canvasRef }) => {
  return (
    <div className="reniebin">
      <div className="reniebin-wrapper">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-12">
              <div className="renie-main-content">
                <H1 title='The smart bin that monetizes your waste' />
                <div className="canvas-container">
                  {/* <canvas ref={canvasRef} className="bin-canvas"></canvas> */}
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
                    <img src="/assets/double-check-3.webp" alt="fraud detection" />
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <h6>
                      Data
                      <br />
                      collection
                    </h6>
                    <img src="/assets/double-check-1.webp" alt="data collection" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
