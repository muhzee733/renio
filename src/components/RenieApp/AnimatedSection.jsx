import React from "react";
import H2 from "../Typography/H2";
import H1 from "../Typography/H1";
import P from "../Typography/P";

const AnimatedSection = () => {
  return (
    <div className="animatedsection">
      <div className="animated-wrapper">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-12">
              <div className="animated-h2">
                <H1 title="consumers receive 0.05 AED or 5 fils per packaging they drop" />
              </div>
            </div>
          </div>
          <div className="row custom-margin-top">
            <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center">
              <div className="animated-left-section ">
                <div className="d-flex align-items-center justify-content-end text-right gap-4">
                  <P
                    title="Rewards is our loyalty system to reward users for their
                    sustainable choice"
                  />
                  <img src="/assets/animated-1.webp" alt="renie" />
                </div>
                <div className="d-flex align-items-center justify-content-end text-right gap-4">
                  <P title="Users can redeem currency directly in the Renie App" />
                  <img src="/assets/animated-2.webp" alt="renie" />
                </div>
                <div className="d-flex align-items-center justify-content-end text-right gap-4">
                  <P
                    title="Currency cannot be bought - users have to recycle to
                    participate"
                  />
                  <img src="/assets/animated-3.webp" alt="renie" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="animated-main-image">
                <img src="/assets/animated-4.webp" alt="renie" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSection;
