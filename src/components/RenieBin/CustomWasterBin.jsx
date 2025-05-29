import React from "react";
import H4 from "../Typography/H4";

const CustomWasterBin = () => {
  return (
    <section className="renie-licensee">
      <div className="container-xl">
        <div className="license-wrapper d-flex">
          <div className="renie-licensee-left custom-design">
            <h1>Custom Waste Streams,</h1>
            <h1>Engineered for you</h1>
            <h2>We build Renie Bins tailored to your mission.</h2>
            <p className="desc">
              Have a unique type of waste you want to collect? Whether it’s
              coffee cups, sneakers, cooking oil, or electronics, we develop
              custom Renie Bins designed specifically for your collection needs.
              Our in-house engineering team adapts the hardware and software to
              support any waste stream, ensuring full integration with the Renie
              platform for tracking, impact reporting, and monetization.
            </p>
            <div className="features-lit">
              <h3>What We Offer:</h3>
              <ul>
                <li>Custom hardware design for non-standard waste types</li>
                <li>Software adaptation for stream-specific data tracking</li>
                <li>Scalable production and delivery from our Dubai factory</li>
                <li>Full connection to ESG reporting and payout mechanisms</li>
              </ul>
            </div>
            <div className="cta-area">
              <H4
                title={"Let’s build the perfect bin for your waste challenge."}
              />
              <button className="btn-2">Request a Custom Bin</button>
            </div>
          </div>
          <div className="renie-licensee-right">
            <div className="main-box">
              <img
                src="/assets/renie-update/customewaste.webp"
                alt="Recycle & Earn Box"
                className="box-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomWasterBin;
