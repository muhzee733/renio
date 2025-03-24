import React from "react";

const SecondSection = () => {
  return (
    <>
      <div className="renie-waste">
        <div class="renie-waste-wrapper">
          <div class="container-xl">
            <div class="row">
              <div class="col-lg-12">
                <div className="renie-waste-box">
                  <h2>
                    A <span style={{ color: "#E31662" }}>centralized</span>
                    waste management system compiles{" "}
                    <span className="all-waste-data">all waste data</span>,
                    <span style={{ color: "#4765E6" }}>
                      tracking generation
                    </span>
                    , disposal, and recycling for efficient management.
                  </h2>
                </div>
              </div>
            </div>
            <div class="row custom-disposal-row">
              <div class="col-lg-4 col-md-4">
                <div className="waste-div">
                  <img src="/assets/reniehub/icon-1.webp" />
                  <p>Tracks generated revenue streams</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div className="waste-div">
                  <img src="/assets/reniehub/icon-2.webp" />
                  <p>Track waste from source to waste management facility</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div className="waste-div">
                  <img src="/assets/reniehub/icon-3.webp" />
                  <p>
                    See real time verified data about waste diverted from
                    landfills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
