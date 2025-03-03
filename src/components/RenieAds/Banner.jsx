import React from "react";

const AdsSection = () => {
  return (
    <section className="renie-ads">
      <div class="renie-ads-wrapper">
        <div className="container">
          <div class="row">
            <div className="col-lg-6 custom-padding ">
              <div>
                <h2 className="fw-bold">
                  Ads That Matter <br /> <span>Redefining Advertising</span>
                </h2>
                <p className="text-muted">
                  We enable impactful ads that empower both advertisers and
                  users with value-driven engagement. Through our innovative
                  AI-powered platform, we redefine the future of advertising
                  where creativity and purpose come together.
                </p>
                <p className="text-white custom-ads-text">
                  Our AI-powered platform uses real-time data from Renie Bins to
                  serve ads that resonate with users, driving engagement through
                  eco-conscious actions. By combining waste metrics and user
                  interactions, we deliver ads that are not only relevant but
                  also impactful.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center renie-ads-img">
              <img
                src="/assets/renieads/renie-phone.png"
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
