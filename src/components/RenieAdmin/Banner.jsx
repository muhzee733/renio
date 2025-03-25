import React from "react";
import P from "../Typography/P";

const Banner = () => {
  return (
    <>
      <header className="renie-admin text-center py-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start renie-admin-left-box">
              <h2>ADMIN PANEL SUPPORT FOR</h2>
              <h1>FRANCHISEES</h1>
              <P title='Effortlessly manage franchise operations with a centralized
                admin panel that streamlines communication, tracks performance,
                and ensures seamless coordination across all locations.'/>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <img
                src="/assets/renieadmin/banner-image.png"
                alt="Admin Panel"
                className="img-fluid renieadmin-image"
              />
            </div>
          </div>
          <figure>
            <img className="scroll-down"  src="/assets/renieadmin/scroll-down.webp" alt="renie-admin "/>
          </figure>
        </div>
      </header>
    </>
  );
};

export default Banner;
