import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

const RenieData = () => {
  useEffect(() => {
    // Register the plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Create the timeline for the animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "left-=120px left", // Start when the left of the trigger reaches the left of the viewport
        end: "+=2000", // Duration of the scroll animation
        scrub: 1, // Smooth scrubbing effect
      },
    });

    // Card animation timeline
    timeline
      .addLabel("card1")
      .to(".card-1", {
        xPercent: 0,
        opacity: 1,
      })
      .from(".card-2", {
        xPercent: 75,
        opacity: 0,
      })
      .addLabel("card2")
      .to(
        ".card-1",
        {
          scale: 0.95,
          xPercent: -0.5,
          opacity: 0.5,
        },
        "-=0.3"
      )
      .to(".card-2", {
        xPercent: 0,
        opacity: 1,
      })
      .from(".card-3", {
        xPercent: 75,
        opacity: 0,
      })
      .addLabel("card3")
      .to(
        ".card-2",
        {
          scale: 0.98,
          xPercent: -0.4,
          opacity: 0.6,
        },
        "-=0.3"
      )
      .to(".card-3", {
        xPercent: 0,
        opacity: 1,
      })
      .to(".card-3", {});

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup the scrollTrigger
    };
  }, []);

  return (
    <div className="renie-dat">
      <div class="container">
        <div class="cards">
          <div class="card card-1">
            <h2>01</h2>
          </div>
          <div class="card card-2">
            <h2>02</h2>
          </div>
          <div class="card card-3">
            <h2>03</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenieData;
