"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  const rowRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Sticky Left Column - Pin the WHOLE ROW
      gsap.to(leftColumnRef.current, {
        scrollTrigger: {
          trigger: rowRef.current, // Pin the whole row to avoid Bootstrap conflicts
          start: "top top",
          end: "bottom bottom",
          pin: true,
          scrub: 1,
        },
      });

      // Horizontal Scroll Animation for Cards
      gsap.to(cardsRef.current, {
        xPercent: -100 * (cardsRef.current.length - 1), // Moves each card 100% left
        ease: "none",
        scrollTrigger: {
          trigger: rightColumnRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white software">
      <div className="container">
        <div className="row position-relative" ref={rowRef}>
          {/* Left Column - Stays Sticky */}
          <div
            className="col-lg-6 col-md-12 position-sticky top-0"
            ref={leftColumnRef}
            style={{ height: "100vh" }} // Ensure it has height
          >
            <div className="software-left d-flex gap-4 w-100 align-items-center">
              <img src="/assets/re-logo.png" width="auto" />
              <div>
                <h2>Renie</h2>
                <h6>Software</h6>
                <p>Where everything comes together</p>
              </div>
            </div>
          </div>

          {/* Right Column - Scrolls Horizontally */}
          <div className="col-lg-6 col-md-12 overflow-hidden">
            <div ref={rightColumnRef} className="software-right-column d-flex">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="software-card bg-primary text-white p-4 m-3 rounded"
                  style={{ minWidth: "300px", minHeight: "200px" }}
                >
                  <img src={`/assets/card-${i + 1}.png`} alt={`Card ${i + 1}`} />
                  <span>Renie Admin {i + 1}</span>
                  <p>Card {i + 1} Description</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
