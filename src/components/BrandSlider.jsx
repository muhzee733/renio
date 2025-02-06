import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const allLogos = [
  "/assets/Layer_1.png",
  "/assets/Layer_2.png",
  "/assets/Layer_3.png",
  "/assets/Layer_4.png",
  "/assets/Layer_5.png",
];

const BrandSlider = () => {
  const [visibleLogos, setVisibleLogos] = useState(allLogos);
  const logoRefs = useRef([]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVisibleLogos((prev) => {
  //       const nextIndex = allLogos.indexOf(prev[0]) + 1;
  //       const newLogos = [
  //         ...prev.slice(1),
  //         allLogos[nextIndex % allLogos.length],
  //       ];

  //       const firstLogo = logoRefs.current[0];
  //       const lastLogo = logoRefs.current[logoRefs.current.length - 1];

  //       gsap.to(firstLogo, {
  //         opacity: 0,
  //         y: -20,
  //         duration: 0.5,
  //         onComplete: () => {
  //           gsap.set(firstLogo, { y: 0 });
  //         },
  //       });
  //       gsap.fromTo(
  //         lastLogo,
  //         { opacity: 0, y: 20 },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.5,
  //           onComplete: () => {
  //             gsap.set(lastLogo, { y: 0 });
  //           },
  //         }
  //       );

  //       return newLogos;
  //     });
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="brand-slider-container">
      <h3>Trusted by Industry Leaders</h3>
      <div className="brand-slider" style={{ display: "flex", gap: "20px" }}>
        {visibleLogos.map((logo, index) => (
          <img
            key={index}
            ref={(el) => (logoRefs.current[index] = el)}
            src={logo}
            alt={`Brand ${index}`}
            className="brand-logo"
            style={{
              opacity: 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
