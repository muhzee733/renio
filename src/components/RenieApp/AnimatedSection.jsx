import React, { useState, useEffect } from "react";

const words = ["Impact", "Recycled", "Rewards"];

const AnimatedSection = () => {
  const [rows, setRows] = useState(20); // Default number of rows
  const [height, setHeight] = useState("5vh"); // Default height of rows

  // Adjust the rows and height based on the screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 786) {
        setRows(10); // Reduce rows for smaller screens
        setHeight("8vh"); // Adjust height for smaller screens
      } else {
        setRows(20); // Default rows for larger screens
        setHeight("5vh"); // Default height for larger screens
      }
    };

    // Initial check
    handleResize();

    // Add event listener on resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <div className="grid grid-cols-8 gap-0 w-full h-full">
        {[...Array(rows * 8)].map((_, i) => {
          return (
            <div
              key={i}
              className="animated-row flex items-center justify-center rounded-full font-semibold w-[12.5vw]"
              style={{
                fontSize: "12px",
                height: height, // Dynamically set the height
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
