import React from "react";
import H1 from "../Typography/H1";
import P from "../Typography/P";

const SecondSection = () => {
  return (
    <>
      <section
        className="features text-white"
        style={{
          background:
            "-webkit-linear-gradient(0deg, #4765E6 0%, #5C4099 46%, #E31662 100%)",
        }}
      >
        <div className="container-xl">
          <div className="feature-text">
            <H1 title={"What is Renie?"} />
            <P title="Renie is a  tech company that provides low-cost, scalable hardware and software tools to power circular systems. Our smart bins collect recyclable waste and connect to a digital platform that verifies impact, extracts data, and unlocks value through data monetization." />
          </div>
          <div className="feature-title-bold">
            <P title="Our ecosystem of hardware and software provides licensees with the tools they need to efficiently manage operations, optimize resources, and drive growth." />
          </div>
          <div className="row text-left feature-h4">
            <div className="col-lg-6 col-md-6 col-lg-3 d-flex align-items-top justify-content-center">
              <div>
                <div className="renie-admin-img">
                  <img
                    src="/assets/renieadmin/group-1.webp"
                    alt="renie-admin"
                  />
                </div>
                <div className="admin-icon">
                  <img src="/assets/renieadmin/icon-5.png" alt="renie-icon" />
                  <h4>
                    Smart bins starting <br /> from $199
                  </h4>
                </div>

                <h5 className="pl-3">Affordable and built for scale</h5>
                <p className="pl-3">
                  Our Smart bins starting from just $199 per unit, enabling mass
                  deployment without high upfront investment. This makes it
                  possible for partners to scale operations efficiently from day
                  one
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-lg-3 mb-0 mb-lg-5">
              <div>
                <div className="renie-admin-img">
                  <img
                    src="/assets/renieadmin/group-2.webp"
                    alt="renie-admin"
                  />
                </div>
                <div className="admin-icon">
                  <img src="/assets/renieadmin/icon-4.webp" alt="renie-icon" />
                  <h4>
                    IoT-Powered <br />
                    Hardware
                  </h4>
                </div>

                <h5 className="pl-3">Real time tracking at the source</h5>
                <p className="pl-3">
                  Our bins are equipped with sensors and 4G connectivity,
                  allowing automatic tracking of every drop, including material
                  type, quantity, and user behavior. The result: transparent,
                  traceable recycling data.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
              <div>
                <div className="renie-admin-img">
                  <img
                    src="/assets/renieadmin/group-3.webp"
                    alt="renie-admin"
                  />
                </div>
                <div className="admin-icon">
                  <img src="/assets/renieadmin/icon-3.webp" alt="renie-icon" />
                  <h4>
                    Modular <br />
                    Software Suite
                  </h4>
                </div>

                <h5 className="pl-3">One platform, four connected apps</h5>
                <p className="pl-3">
                  Renie’s digital platform includes Admin (for operations), Hub
                  (for clients), Rewards (for users), and Ads (for
                  monetization). Each module works together to turn recycling
                  into revenue.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-lg-3">
              <div>
                <div className="renie-admin-img">
                  <img
                    src="/assets/renieadmin/group-4.webp"
                    alt="renie-admin"
                  />
                </div>
                <div className="admin-icon">
                  <img src="/assets/renieadmin/icon-2.webp" alt="renie-icon" />
                  <h4>Data monetization</h4>
                </div>

                <h5 className="pl-3">
                  Earn up to $500 USD/ton of recycled waste
                </h5>
                <p className="pl-3">
                  Every drop tracked by Renie Bins creates valuable data. Our
                  system monetizes this data automatically and pays you up to
                  $500 USD/ ton of waste that is collected and recycled through
                  our technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
