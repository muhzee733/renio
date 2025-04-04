import React from "react";
import H1 from "../Typography/H1";

const Banner = () => {
  return (
    <div className="data-banner">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <img src="/assets/time.webp" alt="time" />
          </div>
          <div className="col-lg-6 col-md-6 custom-data-column">
            <H1 title="Data transforms your trash into cash." />
            <div class="designe">
              <a href="/contact" rel="noopener noreferrer">
                <button>Contact us</button>
              </a>
            </div>
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
