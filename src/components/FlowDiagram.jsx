import React, { useState, useEffect, useRef } from "react";

const FlowDiagram = ({
  setStep,
  text,
  handleStepButtonClick,
  animating,
  nextStep,
  setNextStep,
  setAnimating,
}) => {
  const imageRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const [highlightedButton, setHighlightedButton] =
    useState("Waste Collection");
  const buttons = [
    {
      step: 0,
      label: "Waste Collection",
      image: "/assets/Waste_collection.svg",
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
    { step: 1, label: "You Payout", image: "/assets/Money.svg" },
  ];

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const animateObject = () => {
      if (!animating) return;
      setProgress((prevProgress) => {
        if (prevProgress < nextStep) {
          return Math.min(prevProgress + 0.005, nextStep);
        } else if (prevProgress > nextStep) {
          return Math.max(prevProgress - 0.005, nextStep);
        } else {
          setAnimating(false);
          return prevProgress;
        }
      });
    };

    const interval = setInterval(animateObject, 50);
    return () => clearInterval(interval);
  }, [nextStep, animating]);

  useEffect(() => {
    if (imageRef.current && pathRef.current) {
      const point = pathRef.current.getPointAtLength(progress * pathLength);
      imageRef.current.setAttribute("x", point.x - 12);
      imageRef.current.setAttribute("y", point.y - 12);

      buttons.forEach((button) => {
        const threshold = 0.02;
        if (Math.abs(progress - button.step) < threshold) {
          setHighlightedButton(button.label);
          setStep(button.label);
        }
      });
    }
  }, [progress, pathLength]);

  useEffect(() => {
    const selectedButton = buttons.find(
      (btn) => btn.label === highlightedButton
    );
    if (imageRef.current && selectedButton?.image) {
      imageRef.current.setAttribute("href", selectedButton.image);
    }
  }, [highlightedButton]);

  const handleButtonClick = (step) => {
    setNextStep(step);
    setAnimating(true);
  };

  return (
    <div>
      <div className="custom-diagram" style={{ position: "relative", width: "600px", margin: "auto" }}>
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
            id="animated-path"
            stroke="url(#paint0_linear)"
            strokeWidth="1.61484"
          />
          <image ref={imageRef} width="25" height="25" />
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
            onClick={() => handleButtonClick(button.step)}
            style={{
              position: "absolute",
              top:
                index === 0
                  ? "-12px"
                  : index === 1
                  ? "27%"
                  : index === 2
                  ? "57%"
                  : "auto",
              left:
                index === 0
                  ? "17px"
                  : index === 1
                  ? "48%"
                  : index === 2
                  ? "300px"
                  : "20px",
              bottom: index === 3 ? "20px" : "auto",
              backgroundColor:
                highlightedButton === button.label ? "#e31662" : "#ffffff",
              color: highlightedButton === button.label ? "#ffffff" : "black",
              padding: "14px 26px",
              borderRadius: "30px",
              cursor: "pointer",
              border: "2px solid #544eb8",
              fontSize: "14px",
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
              e.target.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              if (highlightedButton !== button.label) {
                e.target.style.backgroundColor = "white";
                e.target.style.borderColor = "#544eb8";
                e.target.style.color = "black";
              }
            }}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="idea">
        <span style={{ marginRight: "5px" }}>
          <img src="/assets/icon.png" />
        </span>
        NO INTERRUPTION TO YOUR CURRENT WASTE MANAGEMENT PROCESS
      </div>
    </div>
  );
};

export default FlowDiagram;
