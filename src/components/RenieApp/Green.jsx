import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Green = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3, // Delay for a smooth effect after heading
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div className="green" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 ref={headingRef} style={{ opacity: 0, transform: "translateY(30px)" }}>
              Be Part of the Green Revolution!
            </h2>
            <p
              ref={paragraphRef}
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              Every action counts. With the Renie Nexus, you’re not just
              disposing of waste—you’re contributing to a cleaner, smarter
              planet. Join thousands of eco-conscious users and make
              sustainability effortless!
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <button>Explore the Renie Nexus</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Green;
