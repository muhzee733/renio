import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const RenieData = () => {
  const sectionRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top top",
  //         end: "+=100%",
  //         scrub: 1,
  //         pin: true,
  //       },
  //     });

  //     tl.to(".software-right-data", {
  //       xPercent: -105 * 3,
  //       ease: "none",
  //     });

  //     return () => {
  //       ScrollTrigger.getAll().forEach((st) => st.kill());
  //     };
  //   }
  // }, []);

  return (
    <div className="renie-data">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 align-items-center d-flex">
            <div className=" software-left-data">
              <h2>How Does Renie’s Data Monetization Work?</h2>
              <p>
                We redefine waste management by turning waste data into revenue.
                Our Renie Bins collect and analyze waste-related data, allowing
                businesses to benefit from sustainable waste practices while
                generating income.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="software-right-data">
              <h1>Step1</h1>
              <div className="m-data">
                <img src="/assets/cup-icon.png" alt="pin" />
                <h6>Smart Waste Collection</h6>
              </div>
              <p>
                Our intelligent Renie Bins are equipped with advanced sensors
                that collect valuable data from disposed items. Data points
                include material types, brand recognition, and consumer behavior
                insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenieData;
