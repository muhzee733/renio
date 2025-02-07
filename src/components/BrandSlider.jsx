import React, { useEffect, useState, useRef } from "react";


const allLogos = [
  "/assets/ajmanmuncipality-logo.webp",
  "/assets/adea-logo.webp",
  "/assets/ajmantourism-logo.webp",
  "/assets/dubailholding-logo.webp",
  "/assets/dubaimuncipality-logo.webp",
  // "/assets/majidalfuttaim-logo.webp",
  // "/assets/nakheel-logo.webp",
  // "/assets/nfpc-logo.webp",
  // "/assets/tetrapak-logo.webp",
  // "/assets/uber-logo.webp",
  // "/assets/universityofsharjah-logo.webp",
];

const BrandSlider = () => {
  return (
    <div className="brand-slider-container">
      <h3>Trusted by Industry Leaders</h3>
      <div className="brand-slider" style={{ display: "flex", gap: "10px" }}>
        {allLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand ${index}`}
            className="brand-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
