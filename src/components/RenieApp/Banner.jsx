import React, { useEffect } from "react";
import gsap from "gsap";

const Banner = () => {
  useEffect(() => {
    // Image animation (zoom in and out)
    gsap.to(".rene-banner img", {
      scale: 1.1, // Slight zoom-in effect
      repeat: -1, // Make it loop infinitely
      yoyo: true, // Reverse the animation for smooth effect
      duration: 4, // Duration for each cycle
      ease: "power1.inOut", // Ease effect for smooth transition
    });

    // Text animation (fade in and move up)
    gsap.fromTo(
      ".main-renie-banner h1",
      {
        opacity: 0, // Start from invisible
        y: 50, // Start below
      },
      {
        opacity: 1, // Fade to visible
        y: 0, // Move to normal position
        duration: 2, // Duration for text animation
        ease: "power3.out", // Smooth easing
        delay: 1, // Delay the text animation to let image animation run first
      }
    );

    gsap.fromTo(
      ".main-renie-banner h5",
      {
        opacity: 0, // Start from invisible
        y: 50, // Start below
      },
      {
        opacity: 1, // Fade to visible
        y: 0, // Move to normal position
        duration: 2, // Duration for text animation
        ease: "power3.out", // Smooth easing
        delay: 1.5, // Delay slightly more for the secondary text
      }
    );
  }, []);

  return (
    <div className="rene-banner">
      <div className="renie-banner">
        <div className="container">
          <div className="main-renie-banner">
            <img src="/assets/app-1.png" alt="renie app" />
            <h1>Renie Nexus – Smart Waste, Smarter World</h1>
            <h5>Track. Recycle. Reward.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
