import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Slide1 from "./Slide3/Slide1";

const Section3 = () => {
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
          scrub: 1,
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
      <div ref={sectionRef} className="scroll-section-inner">
        <div className="scroll-section">
          <Slide1
            img="/assets/RENIE_ONE.webp"
            title1="RENIE ONE"
            title2="MEET RENIE BINS"
            price1={750}
            price2={1000}
            model= "/assets/test.glb"
          />
        </div>
        <div className="scroll-section bg-danger">
          <Slide1
            img="/assets/RENIE_TWO.webp"
            title1="RENIE Two"
            title2="MEET RENIE BINS"
            price1={1400}
            price2={1900}
            model= "/assets/two-way.glb"
          />
        </div>
        <div className="scroll-section bg-success">
          <Slide1
            img="/assets/RENIE_MAXI.webp"
            title1="RENIE Maxi"
            title2="MEET RENIE BINS"
            price1={1990}
            price2={2540}
            model= "/assets/threee-way.glb"
          />
        </div>
        <div className="scroll-section bg-dark">
          <Slide1
            img="/assets/RENIE_MINI.webp"
            title1="RENIE Mini"
            title2="MEET RENIE BINS"
            price1={750}
            price2={1000}
            model= "/assets/four-way.glb"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
