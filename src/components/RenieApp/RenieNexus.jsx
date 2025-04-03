import React from "react";
import H2 from "../Typography/H2";
import P from "../Typography/P";

const RenieNexus = () => {
  return (
    <div className="renie-nexus">
      <div class="renie-nexus-wrapper">
        <div class="container-xl">
          <div class="row">
            <div class="col-lg-6">
              <img src="/assets/main-hand-mobile.webp" alt="renie-app" />
            </div>
            <div class="col-lg-6 align-items-center d-flex">
              <div className="main-renie-nexus">
                <H2 title="What is the Renie" />
                <div className="diff-color">
                  <H2 title="Nexus?" />
                </div>
                <P
                  title=" The renie nexus is your personal waste management companion,
                  designed to simplify recycling, promote sustainability, and
                  reward responsible behavior. With real-time tracking and data
                  insights, you’ll always know how your waste is being
                  managed—helping you make greener choices every day."
                />
                <a
                  href="https://app.renie.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Explore the Renie Nexus</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenieNexus;
