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

    // IntersectionObserver to start animation when SVG comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Start SVG animation when it comes into view
            gsap.to(".banner-svg-renie", {
              opacity: 1, // Start showing the SVG when in view
              duration: 1, // Smooth transition to make it fade in
              ease: "power1.inOut", // Smooth transition
            });
          }
        });
      },
      { threshold: 0.5 } // Start the animation when 50% of the element is visible
    );

    // Target the SVG iframe element
    const svgElement = document.querySelector(".banner-svg-renie");
    observer.observe(svgElement);

    // Clean up observer when component is unmounted
    return () => {
      if (svgElement) {
        observer.unobserve(svgElement);
      }
    };
  }, []);

  return (
    <div className="rene-banner">
      <div className="renie-banner">
        <div className="banner-svg-bin">
          <iframe
            src="/assets/Website-Wave.svg"
            className="banner-svg-renie"
            title="Website Wave SVG"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              opacity: 0, // Start hidden, will fade in when in view
              transition: "opacity 1s ease", // Smooth fade transition
            }}
          ></iframe>
        </div>
        
        <div className="container-lg">
          <div className="main-renie-banner">
            <img src="/assets/app-1.webp" alt="renie app" />
            <h1>Renie Nexus – Smart Waste, Smarter World</h1>
            <h5>Track. Recycle. Reward.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
