import React from "react";

const ThirdSection = () => {
  return (
    <section className="dashboard-preview text-center">
      <div className="container">
        <figure>
          <img
            src="/assets/renieadmin/image.png"
            alt="Dashboard Preview"
            className="img-fluid mb-4"
          />
        </figure>
        <h2 className="text-primary">
          Powerful Admin Panel for Franchise Success
        </h2>
        <p className="mb-4">
        Simplify operations, enhance communication, and track performance—all in one place. Efficiently manage your franchise network with seamless coordination and real-time waste tracking.
        </p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-danger">Book for a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
