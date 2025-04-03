import React from "react";
import H2 from "../Typography/H2";
import P from "../Typography/P";

const RenieNexus = () => {
  const handleRedirect = () => {
    const isMobile = window.innerWidth <= 768;
    const url = isMobile ? "https://app.renie.io/auth" : "/qrcode";
    window.open(url, "_blank");
  };

  return (
    <div className="renie-nexus">
      <div className="renie-nexus-wrapper">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-6">
              <img src="/assets/main-hand-mobile.webp" alt="renie-app" />
            </div>
            <div className="col-lg-6 align-items-center d-flex">
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
                <button onClick={handleRedirect}>
                  Explore the Renie Nexus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenieNexus;
