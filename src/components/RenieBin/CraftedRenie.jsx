import Link from "next/link";
import React from "react";

const CraftedRenie = () => {
  return (
    <>
      <div className="PowerRenie">
        <div className="power-wrapper  padding-top-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="crafted-renie">
                  <h2>Crafted at the crossroads of innovation and precision</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <Link href="/monitization">
                    <div className="crafted-card">
                      <h3>Data Monitization Technology</h3>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 custom-boxes">
                  <div className="crafted-card-1">
                    <h3>100% Up time </h3>
                    <h3>Power Backup & Connectivity</h3>
                    <ul>
                      <li>Wifi</li>
                      <li>5G</li>
                      <li>Battery</li>
                      <li>DC Power</li>
                    </ul>
                    <img src="/assets/card-bg-light.png" />
                  </div>
                  <div className="crafted-card-1">
                    <h3>Customize Designs</h3>
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
