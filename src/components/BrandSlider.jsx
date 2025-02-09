import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const allLogos = [
  "/assets/ajmanmuncipality-logo.webp",
  "/assets/adea-logo.webp",
  "/assets/ajmantourism-logo.webp",
  "/assets/dubailholding-logo.webp",
  "/assets/dubaimuncipality-logo.webp",
  "/assets/majidalfuttaim-logo.webp",
  "/assets/nakheel-logo.webp",
  "/assets/nfpc-logo.webp",
  "/assets/tetrapak-logo.webp",
  "/assets/uber-logo.webp",
  "/assets/universityofsharjah-logo.webp",
];

const BrandSlider = () => {
  const [visibleLogos, setVisibleLogos] = useState(allLogos.slice(0, 5));
  const logoRefs = useRef([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Wait 2 seconds after page load before animations start
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const animateLogos = () => {
      let availableLogos = allLogos.filter((logo) => !visibleLogos.includes(logo)); // Avoid duplicates
      let newLogos = [...visibleLogos];

      const animations = [
        { y: -100 }, // Slide Up
        { x: -100 }, // Slide Left
        { x: 100 }, // Slide Right
        { y: 100 }, // Slide Down
        { y: -100 }, // Slide Up
      ];

      newLogos.forEach((_, index) => {
        if (availableLogos.length === 0) availableLogos = [...allLogos]; // Reset if needed
        const nextLogo = availableLogos.shift(); // Get next unique logo

        gsap.to(logoRefs.current[index], {
          ...animations[index],
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          delay: index * 0.2, // Staggered animation delay
          onComplete: () => {
            newLogos[index] = nextLogo; // Change logo AFTER animation

            setVisibleLogos([...newLogos]); // Update state AFTER animation completes

            gsap.fromTo(
              logoRefs.current[index],
              { ...animations[index], opacity: 0 },
              { x: 0, y: 0, opacity: 1, duration: 1, ease: "power2.inOut", delay: index * 0.2 }
            );
          },
        });
      });
    };

    const interval = setInterval(animateLogos, 4000); // Give enough time before the next cycle
    return () => clearInterval(interval);
  }, [loaded, visibleLogos]); // Depend on visibleLogos to avoid premature updates

  return (
    <div className="brand-slider-container">
      <h3>Trusted by Industry Leaders</h3>
      <div className="brand-slider">
        {visibleLogos.map((logo, index) => (
          <div key={index} className="brands__item">
            <img
              ref={(el) => (logoRefs.current[index] = el)}
              src={logo}
              alt={`Brand ${index}`}
              className="brand-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
