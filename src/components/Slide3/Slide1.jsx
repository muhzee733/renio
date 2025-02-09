import React from "react";

const Slide1 = ({ img, title1, title2, price1, price2 }) => {
  return (
    <div
      className={
        title1 === "RENIE ONE"
          ? "slide-1 renio-one"
          : title1 === "RENIE Two"
          ? "slide-1 renio-two"
          : title1 === "RENIE Maxi"
          ? "slide-1 renio-Maxi"
          : title1 === "RENIE Mini"
          ? "slide-1 renio-Mini"
          : "slide-1"
      }
    >
      <div class="container">
      <div class="row " style={{alignItems: "center"}}>
        <div class="col-lg-6 col-md-6">
          <div className="left-box">
            <h2>{title1}</h2>
            <img src={img} alt="RENIE_ONE" />
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <h2 className="text-right">{title2}</h2>
          <div className="renio-button">
            <button className={title1 === "RENIE ONE" ? "active" : ""}>
              Renie one
            </button>
            <button className={title1 === "RENIE Two" ? "active" : ""}>
              Renie Two
            </button>
            <button className={title1 === "RENIE Maxi" ? "active" : ""}>
              Renie Maxi
            </button>
            <button className={title1 === "RENIE Mini" ? "active" : ""}>
              Renie Mini
            </button>
          </div>
          <div className="renio-grid">
            <h5>Available Waste Streams</h5>
            <div class="renio-grid-system">
              <div>
                <img src="/assets/Vector.png" />
                <h6>Plastic Bottles</h6>
              </div>
              <div>
                <img src="/assets/Vector-2.png" />
                <h6>Plastic Cups</h6>
              </div>
              <div>
                <img src="/assets/Vector-3.png" />
                <h6>Paper Cups</h6>
              </div>
              <div>
                <img src="/assets/Vector-4.png" />
                <h6>Cans</h6>
              </div>
              <div>
                <img src="/assets/Vector-5.png" />
                <h6>Tetra Pak</h6>
              </div>
              <div>
                <img src="/assets/Vector-6.png" />
                <h6>Glass</h6>
              </div>
            </div>
          </div>
          <div className="renio-footer">
            <h5 className="text-center text-white mt-5 mb-3">Pricing</h5>
            <div class="renio-footer-div">
              <div>
                <h6 className="custom-heading">Standard Design</h6>
                <h5 className="custom-price">{price1} AED</h5>
              </div>
              <div>
                <h6 className="custom-heading">Custom Design</h6>
                <h5 className="custom-price">{price2} AED</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Slide1;
