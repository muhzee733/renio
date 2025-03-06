import React from "react";

const Banner = () => {
  return (
    <div className="data-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <img src="/assets/time.webp" alt="time" />
          </div>
          <div class="col-lg-6 col-md-6 custom-data-column">
            <h1>Unlock the Power of Data Monetization</h1>
            <p>Transform Waste into a Data-Driven Revenue Stream</p>
          </div>
          <div className="downarrow-image">
            <img src="/assets/downarrow.webp" alt="renie" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
