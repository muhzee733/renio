"use client";
import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import Meta from "@/components/Meta";
import H1 from "@/components/Typography/H1";
import H4 from "@/components/Typography/H4";
import P from "@/components/Typography/P";
import H2 from "@/components/Typography/H2";
import {
  HiOutlineMailOpen,
  HiPhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

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
          <H1 title="Connect with an expert" />
        </div>
      </div>

      <div class="container-xl">
        <div class="row">
          <div class="col-lg-4 d-flex align-items-center">
            <div className="contact-left-data">
              <div className="contact-data">
                <H2 title="Renie HQ" />
                <div className="d-flex align-items-center gap-1 inner-contect">
                  <HiOutlineLocationMarker />
                  <P title="Al Sajaah - Sharjah United Arab Emirates" />
                </div>

                <div className="d-flex align-items-center gap-1 inner-contect">
                  <HiOutlineMailOpen />
                  <P title="hello@renie.io" />
                </div>
              </div>
              <div className="contact-data">
                <H2 title="Direct Sales Contact" />
                <div className="d-flex align-items-center gap-1 inner-contect">
                  <HiPhone />
                  <P title="+971556794585" />
                </div>
                <div className="d-flex align-items-center gap-1 inner-contect">
                  <HiOutlineMailOpen />
                  <P title="sales@renie.io" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="form-section">
              <div className="container-xl">
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="Enter your first name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Enter your last name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="companyName"
                      className="form-control"
                      placeholder="Enter your company name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-select"
                      name="wantTo"
                      onChange={handleChange}
                    >
                      <option value="">I want to</option>
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
                    <select
                      className="form-select"
                      name="amA"
                      onChange={handleChange}
                    >
                      <option value="">I'm a</option>
                      <option value="C-Suite Executive">
                        C-Suite Executive
                      </option>
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
                    <select
                      className="form-select"
                      name="nextStep"
                      onChange={handleChange}
                    >
                      <option value="">Ideal next step for me:</option>
                      <option value="Real demonstration (visit Renie Facility)">
                        Real demonstration (visit Renie Facility)
                      </option>
                      <option value="Speak to an expert in Renie">
                        Speak to an expert in Renie
                      </option>
                      <option value="Job enquiry">Job enquiry</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="notes"
                      rows="3"
                      placeholder="Details"
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="submit btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <MiniFooter />
    </>
  );
};

export default ContactUs;
