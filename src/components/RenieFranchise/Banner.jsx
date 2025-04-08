import React from "react";
import { Helmet } from "react-helmet";
import H1 from "../Typography/H1";
import P from "../Typography/P";

const Banner = () => {
  return (
    <div className="renie-franchises position-relative">
      <Helmet>
        <title>Renie Franchise</title>
        <meta name="description" content="Partner with Renie for a successful franchise opportunity. Join a growing network and build the future together." />
      </Helmet>

      <div className="container-xl">
        <div className="row">
          <div className="col-md-7">
            <H1
              title={"Partner with us to unlock a successful franchise opportunity"}
            />
            <P
              title={"Join a network of thriving businesses. Let’s build the future together."}
            />
          </div>
          <div className="col-md-5">
            <form action="" className="contact-form">
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <figure>
          <img src="/assets/json/down-arrow.png" width={150} alt="down arrow" />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
