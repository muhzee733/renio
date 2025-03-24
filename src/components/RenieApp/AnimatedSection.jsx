import React from "react";

const AnimatedSection = () => {
  return (
    <div className="animatedsection">
      <div class="animated-wrapper">
        <div class="container-xl">
          <div class="row">
            <div class="col-lg-12">
              <div class="animated-h2">
                <h2>consumers get 0,05 fills per packaging they drop</h2>
              </div>
            </div>
          </div>
          <div class="row custom-margin-top">
            <div class="col-lg-6 col-md-6 col-12 d-flex align-items-center">
              <div className="animated-left-section ">
                <div className="d-flex align-items-center justify-content-end text-right gap-4">
                  <h4>
                    Rewards is our loyalty system to reward users for their
                    sustainable choice
                  </h4>
                  <img src="/assets/animated-1.webp" alt="renie" />
                </div>
                <div className="d-flex align-items-center justify-content-end text-right gap-4">
                  <h4>Users can redeem currency directly in the Renie App</h4>
                  <img src="/assets/animated-2.webp" alt="renie" />
                </div>
                <div className="d-flex align-items-center justify-content-end text-right gap-4">
                  <h4>
                    Currency cannot be bought - users have to recycle to
                    participate
                  </h4>
                  <img src="/assets/animated-3.webp" alt="renie" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
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
