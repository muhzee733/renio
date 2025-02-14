import React from "react";

const Banner = ({ canvasRef }) => {
  return (
    <div className="reniebin">
      <div className="reniebin-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="renie-main-content">
                <h1>
                  Your waste <br /> supercharged with data
                </h1>
                <p>Renie Bins turn waste into a valuable asset for your business</p>
                <div className="canvas-container">
                  <canvas ref={canvasRef} className="bin-canvas"></canvas>
                </div>
                <div className="banner-boxes">
                  <div className="d-flex align-items-center gap-3">
                    <h6>
                      Accurate <br />
                      verification
                    </h6>
                    <img src="/assets/double-check.svg" alt="verification" />
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <h6>
                      Fraud
                      <br />
                      detection
                    </h6>
                    <img src="/assets/double-check-1.svg" alt="fraud detection" />
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <h6>
                      Data
                      <br />
                      collection
                    </h6>
                    <img src="/assets/double-check-3.svg" alt="data collection" />
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
