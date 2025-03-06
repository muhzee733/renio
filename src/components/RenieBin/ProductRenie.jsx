import React from "react";

const ProductRenie = () => {
  return (
    <div className="ProductRenie">
      <div className="power-wrapper  padding-top-100">
        <div className="container">
          <div className="row">
            <h2>Product Specifications</h2>
          </div>
          <div className="row custom-row">
            <div className="col-lg-4 col-md-4">
              <div className="product-box-wrapper">
                <img src="/assets/icon-1.webp" alt="icon-1" />
                <div className="product-box">
                  <h3>Barcode Reader: </h3>
                  <p>
                    High performance barcode scanner for efficient waste item
                    identification.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="product-box-wrapper">
                <img src="/assets/icon-2.webp" alt="icon-1" />
                <div className="product-box">
                  <h3>Movement Lids: </h3>
                  <p>
                    Responsive movement lid that automatically opens upon
                    successful waste item recognition.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="product-box-wrapper">
                <img src="/assets/icon-3.webp" alt="icon-1" />
                <div className="product-box">
                  <h3>Connectivity: </h3>
                  <p>
                    1. Internet Connectivity: Private WIFI Modem<br /> 2. IoT Capabilities:
                    Enables remote monitoring and control through internet
                    connectivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row custom-row">
            <div className="col-lg-4 col-md-4">
              <div className="product-box-wrapper">
                <img src="/assets/icon-4.webp" alt="icon-1" />
                <div className="product-box">
                  <h3>Power Supply: </h3>
                  <p>1. Input: DC 5V <br /> 2. Current: 5A</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="product-box-wrapper">
                <img src="/assets/icon-6.webp" alt="icon-1" />
                <div className="product-box">
                  <h3>Material Composition: </h3>
                  <p>MDF-PETG-ABS</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="product-box-wrapper">
                <img src="/assets/icon-5.webp" alt="icon-1" />
                <div className="product-box">
                  <h3>Fullness Indicator: </h3>
                  <p>
                    Provides real-time feedback on the bin's capacity,
                    facilitating timely emptying and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRenie;
