import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import gsap from "gsap";

const MiniFooter = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.set(footerRef.current, {
      y: 100,
      opacity: 0,
    });

    const handleScroll = () => {
      const bannerHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollSection = document.getElementById('scroll-section-outer');

      // Check if scroll-section-outer is in view
      if (scrollSection) {
        const sectionRect = scrollSection.getBoundingClientRect();
        const isSectionInView = sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0;

        if (isSectionInView) {
          gsap.to(footerRef.current, {
            y: 100,
            opacity: 0,
            duration: 0.1,
            ease: "power2.out",
          });
          return;
        }
      }

      // Original scroll behavior
      if (scrollPosition > bannerHeight * 0.2) {
        gsap.to(footerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.1,
          ease: "power2.out",
        });
      } else {
        gsap.to(footerRef.current, {
          y: 100,
          opacity: 0,
          duration: 0.1,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer>
      <div ref={footerRef} className="mini-footer">
        <div className="mini-footer-wrapper">
          <p>Find out the cost of your waste today.</p>
          <Button title="Book a free demo" link='/contact' className="btn-1" />
        </div>
      </div>
    </footer>
  );
};

export default MiniFooter;
