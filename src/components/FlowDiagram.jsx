import React, { useState, useEffect, useRef } from "react";

const CustomFlowSVG = ({
  setStep,
  handleStepButtonClick,
  animating,
  nextStep,
  setAnimating,
}) => {
  const imageRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const [highlightedButton, setHighlightedButton] = useState("Waste Collection");
  const [currentImage, setCurrentImage] = useState("/assets/Waste_collection.svg");
  const [animationDirection, setAnimationDirection] = useState("forward"); // Track animation direction

  const buttons = [
    {
      step: 0.35,
      label: "Waste Collection",
      image: "/assets/Data_extraction.svg",
    },
    {
      step: 0.35,
      label: "Data Extraction",
      image: "/assets/Data_monetization.svg",
    },
    {
      step: 0.65,
      label: "Data Monetization",
      image: "/assets/Money.svg",
    },
    { step: 1, label: "You Payout" },
  ];

  // Set default active button to the first one
  useEffect(() => {
    setStep(buttons[0].label);
    setCurrentImage(buttons[0].image);
  }, [setStep]);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Adjust the progress animation based on the direction (forward/backward)
  useEffect(() => {
    const animateObject = () => {
      if (!animating) return;

      setProgress((prevProgress) => {
        if (animationDirection === "forward") {
          if (prevProgress < nextStep) {
            return Math.min(prevProgress + 0.005, nextStep);
          } else {
            setAnimating(false);
            return prevProgress;
          }
        } else {
          if (prevProgress > nextStep) {
            return Math.max(prevProgress - 0.005, nextStep);
          } else {
            setAnimating(false);
            return prevProgress;
          }
        }
      });
    };

    const interval = setInterval(animateObject, 50);
    return () => clearInterval(interval);
  }, [nextStep, animating, animationDirection]);

  useEffect(() => {
    if (imageRef.current && pathRef.current) {
      const point = pathRef.current.getPointAtLength(progress * pathLength);
      imageRef.current.setAttribute("x", point.x - 10);
      imageRef.current.setAttribute("y", point.y - 10);
    }

    buttons.forEach((button) => {
      const threshold = 0.02;
      if (Math.abs(progress - button.step) < threshold) {
        setHighlightedButton(button.label);
        setStep(button.label);
        setCurrentImage(button.image);
      }
    });
  }, [progress, pathLength]);

  // Function to handle the button click (next/prev)
  const handleButtonClick = (step, direction) => {
    setAnimationDirection(direction); // Set animation direction (forward or backward)
    handleStepButtonClick(step); // Call the step button click handler
  };

  return (
    <>
      <div style={{ position: "relative", width: "600px", margin: "auto" }}>
        <svg
          height="auto"
          viewBox="-10 -10 479 380"
          fill="none"
          style={{ width: "100%", height: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M57.9231 1.02979H401.077C432.515 1.02979 458 26.5151 458 57.9529C458 89.3907 432.515 114.876 401.077 114.876L57.9231 114.069C26.4854 114.069 1 139.554 1 170.992C1 202.43 26.4854 227.915 57.9232 227.915L401.077 227.108C432.515 227.108 458 252.593 458 284.031C458 315.468 432.515 340.954 401.077 340.954H57.9232"
            stroke="url(#paint0_linear)"
            strokeWidth="1.61484"
          />
          <image ref={imageRef} href={currentImage} width="25" height="25" />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="128.169"
              y1="1.02978"
              x2="508.706"
              y2="241.902"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4765E6" />
              <stop offset="0.46" stopColor="#5C4099" />
              <stop offset="1" stopColor="#E31662" />
            </linearGradient>
          </defs>
        </svg>

        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(button.step, button.step > progress ? "forward" : "backward")}
            style={{
              position: "absolute",
              top:
                index === 0
                  ? "-20px"
                  : index === 1
                  ? "26%"
                  : index === 2
                  ? "55%"
                  : "auto",
              left:
                index === 0
                  ? "17px"
                  : index === 1
                  ? "48%"
                  : index === 2
                  ? "22%"
                  : "20px",
              bottom: index === 3 ? "0px" : "auto",
              backgroundColor:
                highlightedButton === button.label ? "#e31662" : "#ffffff",
              color: highlightedButton === button.label ? "white" : "black",
              padding: "20px 40px",
              borderRadius: "50px",
              cursor: "pointer",
              border: "2px solid #544eb8",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              boxShadow:
                highlightedButton === button.label
                  ? "0px 0px 15px rgba(227, 22, 98, 0.6)"
                  : "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#d21552";
              e.target.style.borderColor = "#544eb8";
            }}
            onMouseLeave={(e) => {
              if (highlightedButton !== button.label) {
                e.target.style.backgroundColor = "#e0e0e0";
                e.target.style.borderColor = "#544eb8";
              }
            }}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="idea">
        <span style={{marginRight: "5px"}}><img src="/assets/icon.png" /></span>NO INTERRUPTION TO YOUR CURRENT WASTE MANAGEMENT PROCESS
      </div>
    </>
  );
};

export default CustomFlowSVG;
