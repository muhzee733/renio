import React from "react";
import H1 from "../Typography/H1";
import P from "../Typography/P";

const Banner = () => {
  return (
    <div className="data-banner">
      <div class="container-xl">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <img src="/assets/time.webp" alt="time" />
          </div>
          <div class="col-lg-6 col-md-6 custom-data-column">
            <H1 title='Unlock the Power of Data Monetization' />
            <P title='Transform Waste into a Data-Driven Revenue Stream' />
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
