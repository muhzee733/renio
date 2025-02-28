import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const secondSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".feature-h4 .col-lg-3", // Targeting the columns
      {
        opacity: 0, // Start with invisible columns
        y: 50, // Start from the bottom
      },
      {
        opacity: 1, // Fade in to full opacity
        y: 0, // Move to original position
        stagger: 0, // Stagger the animations for each column
        scrollTrigger: {
          trigger: ".features", // Trigger when the .features section enters the viewport
          start: "top 80%", // Trigger when the top of the section is 80% from the top of the viewport
          end: "bottom top", // End when the bottom of the section reaches the top of the viewport
          scrub: true, // Makes the animation smooth with scrolling
        },
      }
    );
  }, []);
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
          <div className="col-lg-6 col-md-6 col-lg-3 mb-5">
            <div className="renie-admin-img">
              <img src="/assets/renieadmin/group-1.png" alt="renie-admin" />
            </div>
            <div className="admin-icon">
              <img src="/assets/renieadmin/icon-1.png" alt="renie-icon" />
              <h4>Seamless Partner Management</h4>
            </div>
            <h5 className="pl-3">
              Manage relations with WMCs and service providers effortlessly.
            </h5>
            <p className="pl-3">
              Easily coordinate with Waste Management Companies (WMCs), service
              areas, and bin providers to ensure smooth operations.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-lg-3 mb-5">
            <div className="renie-admin-img">
              <img src="/assets/renieadmin/group-2.png" alt="renie-admin" />
            </div>
            <div className="admin-icon">
              <img src="/assets/renieadmin/icon-2.png" alt="renie-icon" />
              <h4>Efficient Waste Tracking</h4>
            </div>

            <h5 className="pl-3">Streamline waste management and tracking</h5>
            <p className="pl-3">
              Monitor waste collection, disposal, and recycling processes in
              real time for better resource allocation.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-lg-3">
            <div className="renie-admin-img">
              <img src="/assets/renieadmin/group-3.png" alt="renie-admin" />
            </div>
            <div className="admin-icon">
              <img src="/assets/renieadmin/icon-3.png" alt="renie-icon" />
              <h4>Maximize Revenue</h4>
            </div>

            <h5 className="pl-3">Get full revenue</h5>
            <p className="pl-3">
              Gain full control over revenue streams with <br /> transparent
              financial tracking and automated <br /> reporting.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-lg-3">
            <div className="renie-admin-img">
              <img src="/assets/renieadmin/group-4.png" alt="renie-admin" />
            </div>
            <div className="admin-icon">
              <img src="/assets/renieadmin/icon-4.png" alt="renie-icon" />
              <h4>User Engagement & Growth Insights</h4>
            </div>

            <h5 className="pl-3">Track user engagement and growth</h5>
            <p className="pl-3">
              Track user activity, measure engagement, and <br /> analyze growth
              trends to make data-driven <br /> decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default secondSection;
