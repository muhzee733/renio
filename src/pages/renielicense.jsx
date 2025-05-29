import Footer from "@/components/Navbar/Footer";
import Navbar from "@/components/Navbar/Navbar";
import P from "@/components/Typography/P";
import React from "react";

const RenieLicense = () => {
  return (
    <>
    <Meta
        title="Transform your waste into income"
        description="Discover Renie’s solutions to transform your waste into income by recycling and sustainable waste management. Help us divert waste from landfills."
      />
      <Navbar />
      <div className="renie-license-section">
        <div className="container-xl">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-lg-6 col-md-6 mb-4 mb-lg-0 p-0">
              <h1>
                <span style={{ color: "#4b2aad", fontWeight: "bold" }}>
                  See{" "}
                </span>
                <span style={{ color: "#e9408f", fontWeight: "bold" }}>
                  Renie
                </span>
                <br />
                <span style={{ color: "#4b2aad", fontWeight: "bold" }}>
                  {" "}
                  in Action
                </span>
              </h1>
              <p className="license-description">
                Discover how our smart bins, platforms, and data tools work
                together to turn waste into measurable value.
              </p>
              <div className="license-description-container"><P title={'Before accessing the full interactive demo, tell us a bit about yourself. We wll tailor the experience to your organizations needs.' } /></div>
            </div>
            {/* Right Column */}
            <div className="col-lg-6 col-md-6 d-flex justify-content-center">
              <div
                className="ratio ratio-16x9 w-100"
                style={{ maxWidth: "480px"}}
              >
                <iframe
                  src="https://www.youtube.com/embed/EaG8gPWMBhU"
                  title="YouTube video"
                  allowFullScreen
                  style={{ borderRadius: "12px", border: "2px solid #fff" }}
                ></iframe>
              </div>
            </div>
          </div>
          <div className=" custom-form container mt-4 p-0">
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Name (Full Name)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your phone no"
                  />
                </div>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                />
                <label className="form-check-label" htmlFor="terms">
                  agree on terms and conditions
                </label>
              </div>
              <button
                type="submit"
              >
                ACCESS THE DEMO
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RenieLicense;
