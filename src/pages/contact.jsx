"use client";
import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import Meta from "@/components/Meta";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    wantTo: "",
    amA: "",
    nextStep: "",
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <Meta
          title="Contact Renie | Get in Touch"
          description="Contact Renie | Get in Touch"
        />
      <Navbar />

      {/* Contact Banner */}
      <div className="contact-banner text-center  bg-light">
        <div className="container-xl">
          <h1>Connect with an expert</h1>
        </div>
      </div>

      <div class="form-section">
        <div className="container">
          <form className="row g-3" onSubmit={handleSubmit}>
            {/* First Name & Last Name */}
            <div className="col-md-6">
              <label className="form-label">First name*</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Enter your first name"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last name*</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Enter your last name"
                onChange={handleChange}
              />
            </div>

            {/* Company Name */}
            <div className="col-md-4">
              <label className="form-label">Company name*</label>
              <input
                type="text"
                name="companyName"
                className="form-control"
                placeholder="Enter your company name"
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="col-md-4">
              <label className="form-label">Email*</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>

            {/* Dropdowns */}
            <div className="col-md-4">
              <label className="form-label">I want to*</label>
              <select
                className="form-select"
                name="wantTo"
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="Transform waste into income and track impact">
                  Transform waste into income and track impact
                </option>
                <option value="Advertise on the Renie App (Ads That Matter)">
                  Advertise on the Renie App (Ads That Matter)
                </option>
                <option value="Install bins in my community">
                  Install bins in my community
                </option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">I am a*</label>
              <select
                className="form-select"
                name="amA"
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="C-Suite Executive">C-Suite Executive</option>
                <option value="Sustainability Head or Lead">
                  Sustainability Head or Lead
                </option>
                <option value="Housekeeping Manager">
                  Housekeeping Manager
                </option>
                <option value="General Manager">General Manager</option>
                <option value="Consultant">Consultant</option>
                <option value="Operations/Procurement">
                  Operations/Procurement
                </option>
                <option value="SME Owner Driver">SME Owner Driver</option>
                <option value="A curious recycling enthusiast">
                  A curious recycling enthusiast
                </option>
                <option value="Job seeker">Job seeker</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Ideal next step for me:*</label>
              <select
                className="form-select"
                name="nextStep"
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="Real demonstration (visit Renie Facility)">
                  Real demonstration (visit Renie Facility)
                </option>
                <option value="Speak to an expert in Renie">
                  Speak to an expert in Renie
                </option>
                <option value="Job enquiry">Job enquiry</option>
              </select>
            </div>

            {/* Notes */}
            <div className="col-md-12">
              <label className="form-label">Add notes*</label>
              <textarea
                className="form-control"
                name="notes"
                rows="3"
                placeholder="Details"
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
      <MiniFooter />
    </>
  );
};

export default ContactUs;
