import React from "react";
import H2 from "../Typography/H2";
import P from "../Typography/P";
import H1 from "../Typography/H1";

const MonitizationDiv = () => {
  return (
    <div className="monitization-section">
      <div className="moni-wrapper">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-6 monitization-custom-data">
              <div>
                <H1 title='What is data monetization' />
                <P title='In today’s digital world, data is one of the most valuable
                  assets. Data monetization is the process of converting raw
                  data into actionable insights that drive revenue and business
                  efficiency. At Renie, we take this concept a step further—our
                  innovative technology transforms waste disposal into a
                  data-driven income stream, helping businesses unlock new
                  financial opportunities from everyday operations.' />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <video width="100%" height="30vh" loop muted autoPlay>
                  <source src="/assets/money1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 custom-renie-moni-image">
              <img src="/assets/renie-monitization.webp" alt="renie" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitizationDiv;
