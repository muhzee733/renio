import React, { useEffect } from "react";
import P from "../Typography/P";
import H1 from "../Typography/H1";

const secondSection = () => {
  return (
    <section
      className="features text-white"
      style={{
        background:
          "-webkit-linear-gradient(0deg, #4765E6 0%, #5C4099 46%, #E31662 100%)",
      }}
    >
      <div className="container-xl">
        <div className="feature-text">
          <H1 title={"Why Choose Us"} />
          <P title="Renie.io offers a unique and profitable franchise model that provides you with the tools, support, and resources you need to succeed. Our proven track record and strong brand presence make us the ideal choice for entrepreneurs looking to invest in a business with high growth potential." />
        </div>
        <div className="feature-title-bold">
          <P title="Our powerful admin panel provides franchisees with the tools they need to efficiently manage operations, optimize resources, and drive growth." />
        </div>
        <div className="row text-left feature-h4">
          <div className="col-lg-6 col-md-6 col-lg-3 d-flex align-items-top justify-content-center">
            <div>
              <div className="renie-admin-img">
                <img src="/assets/renieadmin/group-1.webp" alt="renie-admin" />
              </div>
              <div className="admin-icon">
                <img src="/assets/renieadmin/icon-1.webp" alt="renie-icon" />
                <h4>
                  Seamless Partner <br /> Management
                </h4>
              </div>

              <h5 className="pl-3">
                Manage relations with WMCs, areas and bins providers
              </h5>
              <p className="pl-3">
                Gain full control over revenue streams with <br /> transparent
                financial tracking and automated <br /> reporting.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-lg-3 mb-0 mb-lg-5">
            <div>
              <div className="renie-admin-img">
                <img src="/assets/renieadmin/group-2.webp" alt="renie-admin" />
              </div>
              <div className="admin-icon">
                <img src="/assets/renieadmin/icon-2.webp" alt="renie-icon" />
                <h4>
                  Efficient Waste <br />
                  Tracking
                </h4>
              </div>

              <h5 className="pl-3">Streamline waste management and tracking</h5>
              <p className="pl-3">
                Monitor waste collection, disposal, and recycling processes in
                real time for better resource allocation.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
            <div>
              <div className="renie-admin-img">
                <img src="/assets/renieadmin/group-3.webp" alt="renie-admin" />
              </div>
              <div className="admin-icon">
                <img src="/assets/renieadmin/icon-3.webp" alt="renie-icon" />
                <h4>
                  Maximize <br />
                  Revenue
                </h4>
              </div>

              <h5 className="pl-3">Get full revenue</h5>
              <p className="pl-3">
                Gain full control over revenue streams with <br /> transparent
                financial tracking and automated <br /> reporting.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-lg-3">
            <div>
              <div className="renie-admin-img">
                <img src="/assets/renieadmin/group-4.webp" alt="renie-admin" />
              </div>
              <div className="admin-icon">
                <img src="/assets/renieadmin/icon-4.webp" alt="renie-icon" />
                <h4>
                  User Engagement & <br />
                  Growth Insights
                </h4>
              </div>

              <h5 className="pl-3">Track user engagement and growth</h5>
              <p className="pl-3">
                Track user activity, measure engagement, and <br /> analyze
                growth trends to make data-driven <br /> decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default secondSection;
