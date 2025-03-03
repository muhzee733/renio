import React, { useEffect } from "react";

const secondSection = () => {
  return (
    <section
      className="features text-white"
      style={{
        background:
          "-webkit-linear-gradient(80deg, #4765E6 0%, #5C4099 46%, #E31662 100%)",
      }}
    >
      <div className="container">
        <p className="feature-text">
          Our powerful admin panel provides franchisees with the tools they need
          to efficiently manage operations, optimize resources, and drive
          growth.
        </p>
        <div className="row text-left feature-h4">
          <div className="col-lg-6 col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
            <div>
              <div className="renie-admin-img">
                <img src="/assets/renieadmin/group-1.png" alt="renie-admin" />
              </div>
              <div className="admin-icon">
                <img src="/assets/renieadmin/icon-1.png" alt="renie-icon" />
                <h4>Seamless Partner <br /> Management</h4>
              </div>

              <h5 className="pl-3">Get full revenue</h5>
              <p className="pl-3">
                Gain full control over revenue streams with <br /> transparent
                financial tracking and automated <br /> reporting.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-lg-3 mb-5">
            <div>
              <div className="renie-admin-img">
                <img src="/assets/renieadmin/group-2.png" alt="renie-admin" />
              </div>
              <div className="admin-icon">
                <img src="/assets/renieadmin/icon-2.png" alt="renie-icon" />
                <h4>Efficient Waste <br />Tracking</h4>
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
                <img src="/assets/renieadmin/group-3.png" alt="renie-admin" />
              </div>
              <div className="admin-icon">
                <img src="/assets/renieadmin/icon-3.png" alt="renie-icon" />
                <h4>Maximize <br />Revenue</h4>
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
                <img src="/assets/renieadmin/group-4.png" alt="renie-admin" />
              </div>
              <div className="admin-icon">
                <img src="/assets/renieadmin/icon-4.png" alt="renie-icon" />
                <h4>User Engagement & <br />Growth Insights</h4>
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
