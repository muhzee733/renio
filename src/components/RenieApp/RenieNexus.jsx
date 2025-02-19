import React from "react";

const RenieNexus = () => {
  return (
    <div className="renie-nexus">
      <div class="renie-nexus-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <img src="/assets/main-hand-mobile.png" alt="renie-app" />
            </div>
            <div class="col-lg-6 align-items-center d-flex">
              <div className="main-renie-nexus">
                <h2>What is the Renie <span style={{color: "#E21663"}}>Nexus?</span></h2>
                <p>
                  The Renie Nexus is your personal waste management companion,
                  designed to simplify recycling, promote sustainability, and
                  reward responsible behavior. With real-time tracking and data
                  insights, you’ll always know how your waste is being
                  managed—helping you make greener choices every day.
                </p>
                <button>Explorer the Renie Nexus</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenieNexus;
