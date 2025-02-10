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
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const logoRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const animateLogos = () => {
      let availableLogos = allLogos.filter(
        (logo) => !visibleLogos.includes(logo)
      );
      let newLogos = [...visibleLogos];

      const animations = [
        { y: -100 },
        { x: -100 },
        { x: 100 },
        { y: 100 },
        { y: -100 },
      ];

      newLogos.forEach((_, index) => {
        if (availableLogos.length === 0) availableLogos = [...allLogos];
        const nextLogo = availableLogos.shift();

        gsap.to(logoRefs.current[index], {
          ...animations[index],
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          delay: index * 0.2,
          onComplete: () => {
            newLogos[index] = nextLogo;

            setVisibleLogos([...newLogos]);

            gsap.fromTo(
              logoRefs.current[index],
              { ...animations[index], opacity: 0 },
              {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                delay: index * 0.2,
              }
            );
          },
        });
      });
    };

    const interval = setInterval(animateLogos, 4000);
    return () => clearInterval(interval);
  }, [loaded, visibleLogos]);

  useEffect(() => {
    setVisibleLogos(isMobile ? allLogos.slice(0, 3) : allLogos.slice(0, 5));
  }, [isMobile]);

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
