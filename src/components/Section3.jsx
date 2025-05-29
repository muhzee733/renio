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
          end: "+=300%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / 3, // Since we have 4 sections, we need 3 transitions
            duration: { min: 0.2, max: 0.3 },
            delay: 0,
            ease: "power1.inOut"
          }
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} className="scroll-section-outer">
      <div ref={sectionRef} className="scroll-section-inner">
        <div className="scroll-section">
          <Slide1
            img="/assets/RENIE_ONE.webp"
            title1="Renie one"
            title2="Meet Renie Bins"
            model="/assets/test.glb"
          />
        </div>
        <div className="scroll-section bg-danger">
          <Slide1
            img="/assets/RENIE_TWO.webp"
            title1="Renie two"
            title2="Meet Renie Bins"
            model="/assets/two-way.glb"
          />
        </div>
        <div className="scroll-section bg-success">
          <Slide1
            img="/assets/RENIE_MAXI.webp"
            title1="Renie maxi"
            title2="Meet Renie Bins"
            model="/assets/threee-way.glb"
          />
        </div>
        <div className="scroll-section bg-dark">
          <Slide1
            img="/assets/RENIE_MINI.webp"
            title1="Renie mini"
            title2="Meet Renie Bins"
            model="/assets/four-way.glb"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
