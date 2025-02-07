import React from "react";

const Section6 = () => {
  return (
    <div>
      <div className="scroll-section-inner">
        <div className="scroll-section bg-white software">
          <div className="container">
            <div className="software-wrapper">
              <div className="software-left-column">
                <div className="software-left d-flex gap-4 w-100 align-items-center">
                  <img src="/assets/re-logo.png" width="auto" />
                  <div className="">
                    <h2>Renie</h2>
                    <h6>Software</h6>
                    <p>Where everything comes together</p>
                  </div>
                </div>
              </div>
              <div className="software-right-column">
                <div className="software-right-container">
                  <img src="/assets/renie-hub.png" />
                  <span>Renie Admin</span>
                  <p>
                    The core software that manages all the Renie bins in one
                    place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
