import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExpandingTextGrid = () => {
  const containerRef = useRef(null);
  const textWrapperRef = useRef(null);
  const [rows, setRows] = useState(1); // Start with 1 row

  useEffect(() => {
    gsap.to(textWrapperRef.current, {
      width: "100%", // Expands row left to right
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const newRows = Math.floor(progress * 10) + 1;
          setRows(newRows); // Increase rows dynamically
        },
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* 100vh Section Above */}
      <div className="h-[100vh] bg-gray-200 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Scroll Down</h2>
      </div>

      {/* Expanding Text Section */}
      <div
        ref={containerRef}
        className="relative h-[200vh] bg-lime-400 flex flex-col justify-center items-center"
      >
        <div ref={textWrapperRef} className="overflow-hidden flex flex-col items-center">
          {[...Array(rows)].map((_, rowIndex) => (
            <div key={rowIndex} className="flex justify-center space-x-2 my-1">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="border-2 border-black px-4 py-2 text-lg font-bold rounded-full bg-lime-300"
                >
                  {i % 2 === 0 ? "Let's Make" : "Stryds"}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 100vh Section Below */}
      <div className="h-[100vh] bg-gray-200 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Keep Scrolling</h2>
      </div>
    </div>
  );
};

export default ExpandingTextGrid;
