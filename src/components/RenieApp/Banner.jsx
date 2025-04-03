import React, { useEffect } from "react";
import gsap from "gsap";
import H1 from "../Typography/H1";
import H4 from "../Typography/H4";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Banner = () => {
  useEffect(() => {
    // Image animation (zoom in and out)
    gsap.to(".rene-banner img", {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "power1.inOut",
    });

    // Text animation (fade in and move up)
    gsap.fromTo(
      ".main-renie-banner h1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 1 }
    );

    gsap.fromTo(
      ".main-renie-banner h5",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 1.5 }
    );
  }, []);

  return (
    <div className="rene-banner">
      <div className="renie-banner">
        <div className="banner-svg-bin">
          {/* ✅ Lottie animation replaces the SVG iframe */}
          <DotLottieReact
            src="/assets/website-wave.json"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }} // Adjust width & height
          />
        </div>

        <div className="container-lg">
          <div className="main-renie-banner">
            <img src="/assets/app-1.webp" alt="renie app" />
            <H1 title="Renie Nexus – Smart Waste, Smarter World" />
            <H4 title="Track. Recycle. Reward." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
