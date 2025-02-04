import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Section5 = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <div ref={triggerRef}>
      <div ref={sectionRef} className="scroll-section-inner section-5">
        <div class="scroll-section ">
          <h1>Section 1</h1>
        </div>
        <div class="scroll-section">
          <h1>Section 2</h1>
        </div>
        <div class="scroll-section">
          <h1>Section 3</h1>
        </div>
        <div class="scroll-section">
          <h1>Section 4</h1>
        </div>
      </div>
    </div>
  );
};

export default Section5;
