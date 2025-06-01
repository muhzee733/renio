import React from "react";
import Image from "next/image";
import H1 from "../Typography/H1";
import P from "../Typography/P";

const ThirdSection = () => {
  return (
    <section className="why-renie bg-white text-center">
      <div className="container-xl">
        <H1 title={"Why Renie?"} />
        <div className="renie-paragraph">
          <P title={"Smart Tech. Proven Model. Global Momentum."} />
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-4">
            <Image
              src="/assets/renie-update/icon-1.png"
              alt="First mover advantage"
              width={90}
              height={100}
              className="mb-2"
            />
            <p className="small mt-2">First mover advantage</p>
          </div>

          <div className="col-12 col-md-4">
            <Image
              src="/assets/renie-update/icon-2.png"
              alt="Scalable hardware"
              width={90}
              height={100}
              className="mb-2"
            />
            <p className="small mt-2">
              Scalable, plug-and-play IoT hardware (Renie Bins)
            </p>
          </div>

          <div className="col-12 col-md-4">
            <Image
              src="/assets/renie-update/icon-4.png"
              alt="Full software suite"
              width={90}
              height={100}
              className="mb-2"
            />
            <p className="small mt-2">
              Full software suite: Admin, Hub, Rewards, and Ads
            </p>
          </div>
        </div>
        <div className="row justify-content-center g-4 mt-2">
          <div className="col-12 col-md-4">
            <Image
              src="/assets/renie-update/icon-5.png"
              alt="Data monetization"
              width={90}
              height={100}
              className="mb-2"
            />
            <p className="small mt-2">
              Automated data monetization built into every ton of packaging
              recycled
            </p>
          </div>

          <div className="col-12 col-md-4">
            <Image
              src="/assets/renie-update/icon-3.png"
              alt="Trusted by enterprises"
              width={90}
              height={100}
              className="mb-2"
            />
            <p className="small mt-2">
              Trusted by governments, developers, and Fortune 500 brands
            </p>
          </div>
        </div>
        <div className="mt-5">
          <button
            className="btn-2"
            onClick={() => (window.location.href = "/renielicense")}
          >
            Explore the Full demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
