"use client"; // Add this at the top if you're in an app directory

import React from "react";

const AdImpactSection = () => {
  return (
    <div className="container-fluid gradient-bg text-center">
      <div className="row justify-content-center custom-ads-column">
        <div className="col-md-5">
          <h3 className="fw-bold text-white">The Ads That Matter Platform</h3>
          <p className="text-dark">
            Gain valuable insights into your campaign’s performance with a dedicated advertising
            dashboard, allowing you to track engagement, measure impact, and optimize your strategy
            in real time.
          </p>
        </div>
        <div className="col-md-5">
          <h3 className="fw-bold text-white">Turn Ad Impressions into Real Sustainability Impact</h3>
          <p className="text-dark">
            Your marketing spend now drives measurable environmental benefits—real, verifiable
            reductions in landfill waste and CO2 emissions. Track your impact live through your Ads
            That Matter account, ensuring true sustainability beyond just greenwashing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdImpactSection;
