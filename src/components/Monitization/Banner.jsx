import React from "react";
import H1 from "../Typography/H1";
import P from "../Typography/P";
import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter();
  return (
    <div className="data-banner">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <img src="/assets/time.webp" alt="time" />
          </div>
          <div className="col-lg-6 col-md-6 custom-data-column">
            <H1 title="Data transforms your trash into cash." />
            {/* <P title='Transform waste into a data-driven revenue stream' /> */}
            <button
              className="btn mt-4"
              onClick={() => router.push("/contact")}
            >
              Explore More
            </button>
          </div>
          <div className="downarrow-image">
            <img src="/assets/downarrow.webp" alt="renie" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
