import Link from "next/link";
import React from "react";

const CraftedRenie = () => {
  return (
    <>
      <div className="PowerRenie">
        <div className="power-wrapper  padding-top-100">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-12">
                <div className="crafted-renie">
                  <h2>Crafted at the crossroads of innovation and precision</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <Link href="/monetization">
                    <div className="crafted-card">
                      <h3>Data monitization technology</h3>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 custom-boxes">
                  <div className="crafted-card-1">
                    <h3><span style={{color: "#02FE39"}}>100%</span> up time </h3>
                    <h3>Power backup & connectivity</h3>
                    <ul>
                      <li>Wifi</li>
                      <li>2.5G</li>
                      <li>Battery</li>
                      <li>DC Power</li>
                    </ul>
                    <img src="/assets/card-bg-light.webp" />
                  </div>
                  <div className="crafted-card-1">
                    <h3>Customize designs</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CraftedRenie;
