"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { width: "80%" }, // Start at 80% width
      {
        width: "50px", // Shrink to 50px width
        duration: 4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top top", // Start shrinking when it reaches the top
          end: "+=600px", // Shrink gradually over 300px of scroll
          scrub: true, // Smooth scrolling effect
          pin: true, // Keep navbar in place while scrolling
        },
      }
    );
  }, []);

  return (
    <div className="h-[200vh] bg-gray-100">
      {/* Fixed Navbar that shrinks on scroll */}
      <div
        ref={boxRef}
        className="bg-gray-900 h-16"
      ></div>
    </div>
  );
};

export default AnimatedBox;
