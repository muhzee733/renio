"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LoveRenie = () => {
  const imageRef = useRef([]);
  const imageContainerRef = useRef();

  const imageSection = [];
  for (let i = 1; i <= 4; i++) {
    imageSection.push(
      <div
        key={i}
        className="w-[40vh] shrink-0 rounded-3xl"
        ref={(el) => (imageRef.current[i - 1] = el)}
      >
        <img src={`/assets/${i}.png`} className="w-full" />
      </div>
    );
  }

  useEffect(() => {
    // GSAP animation for horizontal scrolling
    gsap.to(imageRef.current, {
      xPercent: -100 * (imageRef.current.length - 1), // Move the images based on their number
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        scrub: 1, // Smooth scroll behavior
        end: () => `+=${imageContainerRef.current.offsetWidth}`, // Scroll to the end of the container
        pin: true, 
        snap: 1 / (imageRef.current.length - 1),
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="renie-love">
      <div className="renie-love-wrapper" >
        <div className="container" ref={imageContainerRef}>
          <div className="row justify-content-center text-center "  >
            <div className="col-lg-12">
              <h2>
                Why You’ll Love <span style={{color: "#e31662"}}>❤︎</span> Renie Nexus
              </h2>
            </div>
            <main className="overflow-x-hidden mt-5">
              <div
                className="flex flex-nowrap items-center space-x-20"
                style={{ width: "calc(100vw * 4)" }} // Set the width of the container
              >
                {imageSection}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveRenie;
