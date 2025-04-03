import React from "react";
import P from "../Typography/P";
import H2 from "../Typography/H2";
import H1 from "../Typography/H1";

const AdsSection = () => {
  return (
    <section className="renie-ads">
      <div className="renie-ads-wrapper">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-7 custom-padding ">
              <div>
                <H1 title="Ads that matter redefining advertising" />
                <P
                  title="We enable impactful ads that empower both advertisers and
                  users with value-driven engagement. Through our innovative
                  AI-powered platform, we redefine the future of advertising
                  where creativity and purpose come together."
                />
                <div className="custom-ads-text">
                  <P
                    title="Our AI-powered platform uses real-time data from Renie Bins to serve ads that resonate with users, driving engagement through
                  eco-conscious actions. By combining waste metrics and user
                  interactions, we deliver ads that are not only relevant but
                  also impactful."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex justify-content-center renie-ads-img">
              <img
                src="/assets/renieads/renie-phone.webp"
                alt="Mobile UI"
                className="rounded "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsSection;
