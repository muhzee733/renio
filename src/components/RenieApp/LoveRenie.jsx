"use client";
import React from "react";
import H2 from "../Typography/H2";
import H4 from "../Typography/H4";

const LoveRenie = () => {
  const featureTexts = [
    "No registration & downloads needed.  ",
    "Easily locate the nearest Renie Bin and navigate to it.",
    "No vouchers or discounts—just real, valuable rewards!",
    "Track Every Bottle, Measure Your Impact",
  ];

  const mediaSources = [
    "/assets/animate-svg-3.svg",
    "/assets/animate-svg-2.svg",
    "/assets/animate-svg-1.svg",
    "/assets/animate-svg-5.svg",
  ];

  return (
    <div className="renie-love">
      <div className="container-xl">
        <div className="row text-center">
          <div className="col-12">
            <H2
              title="Why You’ll Love ❤︎ Renie
              Nexus"
            />
          </div>
        </div>
        <div className="row mt-5 d-flex justify-content-center align-items-center custom-data-svg">
          {featureTexts.map((text, i) => (
            <div
              key={i}
              className="col-6 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center text-center"
            >
              {mediaSources[i].endsWith(".svg") ? (
                // Render SVG inside an iframe
                <iframe
                  src={mediaSources[i]}
                  title={`Animated SVG ${i + 1}`}
                  className="svg-image mb-3"
                  style={{ width: "100%", height: "300px", border: "none" }}
                />
              ) : (
                // Render PNG as an img tag
                <img
                  src={mediaSources[i]}
                  alt={`Feature ${i + 1}`}
                  className="img-fluid mb-3"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "contain",
                  }}
                />
              )}
              <H4 title={text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveRenie;
