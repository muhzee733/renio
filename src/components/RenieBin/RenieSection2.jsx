import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Simulated API data
const renieData = [
  {
    title: "Smart Barcode Reader",
    animation: "/assets/json/barcode.json",
  },
  {
    title: "LID Automation",
    animation: "/assets/json/led.json",
  },
  {
    title: "Smart Light Indication",
    animation: "/assets/json/light.json",
  },
];

const RenieSection = () => {
  return (
    <div className="RenieSection2">
      <div className="RenieSection2-container">
        <div className="banner-svg-bin">
          <DotLottieReact src="/assets/website-wave.json" loop autoplay />
        </div>

        <div className="renie-card-parent">
          {renieData.map((item, index) => (
            <div
              key={index}
              className={`renie-card renie-card-${
                index + 1
              } d-flex flex-column justify-content-center`}
            >
              <div className="renie-card-inner">
                <DotLottieReact src={item.animation} loop autoplay className="custom-lotti"/>
              </div>
              <p className="text-dark mt-4 fw-semibold text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenieSection;
