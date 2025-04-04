import Link from "next/link";
import React from "react";

const Discover = () => {
  return (
    <div className="discover">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-8 col-md-8 align-items-center d-flex">
            <div className="discover-section">
              <h2>
                Discover <br /> our Renie Nexus
              </h2>
              <p>
                Step into the future of auscultation with our cutting-edge
                platform.
              </p>
              <div className="d-flex designe">
              <Link href="/contact">
                <button>Request a demo</button>
              </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="discover-image">
              <img src="/assets/discover.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
