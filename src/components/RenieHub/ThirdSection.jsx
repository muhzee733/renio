import React from "react";
import P from "../Typography/P";
import H2 from "../Typography/H2";
import H1 from "../Typography/H1";

const ThirdSection = () => {
  return (
    <>
      <div className="control">
        <div className="controll-wrapper">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-12">
                <div className="control-upper-section">
                  <H1 title="First, you’ll need full transparency and control" />
                  <P
                    title="We will first set you up on the Renie Hub where you can
                    monitor every step related to the Renie Bins you are
                    provided, track the impact you make, and watch the passive
                    income you generate through the Renie Bins live on the Renie
                    Hub"
                  />
                </div>
              </div>
            </div>
            <div className="row control-below-section mb-100">
              <div className="col-lg-6 col-md-6 d-flex align-items-center">
                <div className="revolution">
                  <H2 title="Revolutionizing Waste Management with Smart Bin Control" />
                  <P
                    title="Renie Hub empowers you with real-time insights and
                    automation for seamless waste tracking. Monitor bin levels,
                    optimize collection, and maximize efficiency—all through an
                    intelligent, data-driven platform. Turn waste into value
                    while contributing to a cleaner, smarter future."
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="d-flex justify-content-end justify-content-center-md">
                  <img src="/assets/reniehub/imag-2.webp" width={500}/>
                </div>
              </div>
            </div>
            <div className="row control-below-section m-below-section">
              <div className="col-lg-6 col-md-6">
                <div>
                  <img src="/assets/reniehub/imag.webp" width={500}/>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-flex align-items-center">
                <div className="track-data">
                  <H2 title="Track Impact and Waste" />
                  <P
                    title="Monitor the difference you are making by tracking the waste
                    collected and recycled by the Renie Bins you’ve been
                    provided. You can also generate tailored ESG reports about
                    your created impact."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
