import React from "react";
import P from "../Typography/P";

const SecondSection = () => {
  return (
    <>
      <div className="renie-waste">
        <div className="renie-waste-wrapper">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-12">
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
            <div className="row custom-disposal-row">
              <div className="col-lg-4 col-md-4">
                <div className="waste-div">
                  <img src="/assets/reniehub/icon-1.webp" />
                  <P title="Tracks generated revenue streams" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="waste-div">
                  <img src="/assets/reniehub/icon-2.webp" />
                  <P title="Track waste from source to waste management facility" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="waste-div">
                  <img src="/assets/reniehub/icon-3.webp" />
                  <P
                    title="See real time verified data about waste diverted from
                    landfills"
                  />
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
