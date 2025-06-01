import React from "react";
import H2 from "../Typography/H2";

const ProductRenie = () => {
  return (
    <div className="ProductRenie">
      <div className="power-wrapper  padding-top-100">
        <div className="container-xl">
          <div className="row">
            <H2 title='Product specifications' />
          </div>
          <div className="row custom-row">
            <div className="col-lg-4 col-md-4">
              <div className="product-box-wrapper">
                <img src="/assets/icon-1.webp" alt="icon-1" />
                <div className="product-box">
                  <h3>Barcode reader: </h3>
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
                  <h3>Selective lid: </h3>
                  <p>
                  Opens only for correct material, ensuring clean, accurate waste collection.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-5">
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
                  <h3>Power supply: </h3>
                  <p>1. Input: DC 5V <br /> 2. Current: 5A</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="product-box-wrapper">
                <img src="/assets/new-icon.png" alt="icon-1" />
                <div className="product-box">
                  <h3>Material composition: </h3>
                  <p>MDF-PETG-ABS</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="product-box-wrapper">
                <img src="/assets/icon-5.webp" alt="icon-1" />
                <div className="product-box">
                  <h3>Fill level sensor: </h3>
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
