import React from "react";
import H2 from "../Typography/H2";
import P from "../Typography/P";
import H1 from "../Typography/H1";

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
                <H1 title="What is Renie" />
                <div className="diff-color">
                  <H1 title="Nexus?" />
                </div>
                <P
                  title=" Renie Nexus is your personal waste management companion that transforms how you recycle while rewarding users for their responsible behavior. This innovative incentive program is entirely self-subsidized— user’s participation generates valuable waste management data that Renie monetizes, allowing us to offer you direct rewards for sustainable choices. With real-time tracking and actionable insights, you'll see exactly how your waste is being managed while earning benefits from the very data you help create, making green choices financially rewarding every day."
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
