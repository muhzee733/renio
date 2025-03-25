import React from "react";
import H2 from "../Typography/H2";
import P from "../Typography/P";

const ThirdSection = () => {
  return (
    <section className="dashboard-preview text-center bg-white ">
      <div className="container-xl ">
        <H2  title='Powerful Admin Panel' />
        <figure className="position-relative">
          <img
            src="/assets/renieadmin/image.webp"
            alt="Dashboard Preview"
            className="img-fluid mb-4"
          />
          <img
            src="/assets/renieadmin/logo.webp"
            alt="Dashboard Preview"
            className="img-fluid custom-ads-image"
          />
        </figure>
        
        <h2 className="text-primary">For Franchise Success!</h2>
        <P title='Simplify operations, enhance communication, and track performance—all
          in one place. Efficiently manage your franchise network with seamless
          coordination and real-time waste tracking.'/>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-danger">Book for a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
