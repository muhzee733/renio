"use client"; // Add this at the top if you're in an app directory

import React from "react";
import H4 from "../Typography/H4";
import P from "../Typography/P";

export default function AdsSection() {
  return (
    <section className="adsmetter" style={sectionStyle}>
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex">
            <div
              className="ads-card text-center h-100 d-flex flex-column"
            >
              <img
                src="/assets/renieads/icon-1.webp"
                alt="Platform Icon"
                className="mb-3 mx-auto"
              />
              <H4 title='The ads that matter platform' />
              <P title='Gain valuable insights into your campaign’s performance with a
                dedicated advertising dashboard, allowing you to track
                engagement, measure impact, and optimize your strategy in
                real-time.' />
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div
              className="ads-card text-center h-100 d-flex flex-column"
            >
              <img
                src="/assets/renieads/icon-2.webp"
                alt="Sustainability Icon"
                className="mb-3 mx-auto"
              />
              <H4 title='Turn ads impressions into real sustainability impact' />
              <P title='Your marketing spend now drives measurable environmental
                benefits—real, verifiable reductions in landfill waste and CO2
                emissions. Track your impact live through your Ads That Matter
                account.' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  background: "linear-gradient(90deg, #4765e6 0%, #5c4099 46%, #e31662 100%)",
};

