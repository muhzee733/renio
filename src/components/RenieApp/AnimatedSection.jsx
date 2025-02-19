import React from "react";

const words = ["Impact", "Recycled", "Rewards"];

const AnimatedSection = () => {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <div className="grid grid-cols-8 grid-rows-20 gap-0 w-full h-full">
        {[...Array(160)].map((_, i) => {
          // Generate a random x position for each row
          const xPosition = Math.floor(Math.random() * 50) - 25; // Random x value between -25 and 25
          return (
            <div
              key={i}
              className="animated-row flex items-center justify-center rounded-full font-semibold w-[12.5vw] h-[5vh]"
              style={{
                fontSize: "12px",
                color: i % 2 === 0 ? "#4765E6" : "#E31662",
                border: "1px solid transparent",
                backgroundImage:
                  "linear-gradient(white, white), linear-gradient(90deg, #4765E6 0%, #5C4099 46%, #E31662 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              {words[i % 3]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedSection;
