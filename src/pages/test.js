import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const StackedCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let cards = cardsRef.current;

    gsap.set(cards, { yPercent: 100, opacity: 0 });

    gsap.to(cards, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(cards, {
      yPercent: -50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center min-h-screen py-20 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className="absolute w-80 h-60 bg-blue-500 text-white flex items-center justify-center rounded-xl shadow-lg transition-all"
          style={{ top: `${i * 20}px`, zIndex: 5 - i }}
        >
          Card {i + 1}
        </div>
      ))}
    </div>
  );
};

export default StackedCards;
