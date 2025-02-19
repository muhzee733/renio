import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function Section6() {
  const sectionRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=500%",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(".software-right-container", {
        xPercent: -100 * 4,
        ease: "none",
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }
  }, []);

  return (
    <main className="w-100">
      <div className="container">
        <section ref={sectionRef} className="d-flex min-vh-100 w-100">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="software-left-data text-center">
              <h2>How Does Renie’s Data Monetization Work?</h2>
              <p>
                We redefine waste management by turning waste data into revenue.
                Our Renie Bins collect and analyze waste-related data, allowing
                businesses to benefit from sustainable waste practices while
                generating income.
              </p>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-center overflow-hidden position-relative">
            <div className="d-flex flex-nowrap gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="software-right-container software-right-data p-4 bg-white rounded shadow">
                  <h1>Step {index + 1}</h1>
                  <div className="m-data d-flex align-items-center gap-2">
                    <img src="/assets/cup-icon.png" alt="pin" className="img-fluid" />
                    <h6>Smart Waste Collection</h6>
                  </div>
                  <p>
                    Our intelligent Renie Bins are equipped with advanced sensors
                    that collect valuable data from disposed items. Data points
                    include material types, brand recognition, and consumer
                    behavior insights.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Section6;
