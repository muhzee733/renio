import React, { useState, useEffect } from "react";

const Slider = ({ handleStepButtonClick, nextStep }) => {
  const steps = [
    { step: 0, label: "Step 1" },
    { step: 0.35, label: "Step 2" },
    { step: 0.65, label: "Step 3" },
    { step: 1, label: "Step 4" },
  ];

  const cardTexts = [
    {
      title: "Step 1: Purchase renie bins",
      desc: (
        <>
          Renie bins represent a revolutionary approach to waste management,
          transforming how you handle recyclable waste. These intelligent bins
          are designed to segregate waste at the source, utilizing advanced
          recognition technology to ensure precise waste stream separation.
          <br />
          <br />
          <strong>Key Features:</strong>
          <br />
          1. Multiple compartments for different waste types
          <br />
          2. AI-powered recognition system
          <br />
          3. Real-time waste stream identification
          <br />
          4. Automated sorting capabilities
        </>
      ),
    },
    {
      title: "Step 2: Sort recyclables",
      desc: (
        <>
          Renie bins represent a revolutionary approach to waste management,
          transforming how you handle recyclable waste. These intelligent bins
          are designed to segregate waste at the source, utilizing advanced
          recognition technology to ensure precise waste stream separation.
        </>
      ),
    },
    {
      title: "Step 3: Drop off at the recycling center",
      desc: (
        <>
          Renie bins represent a revolutionary approach to waste management,
          transforming how you handle recyclable waste. These intelligent bins
          are designed to segregate waste at the source, utilizing advanced
          recognition technology to ensure precise waste stream separation.
        </>
      ),
    },
    {
      title: "Step 4: Monitor waste reduction",
      desc: (
        <>
          Renie bins represent a revolutionary approach to waste management,
          transforming how you handle recyclable waste. These intelligent bins
          are designed to segregate waste at the source, utilizing advanced
          recognition technology to ensure precise waste stream separation.
        </>
      ),
    },
  ];

  const getValidIndex = (stepValue) => {
    const index = steps.findIndex((stepObj) => stepObj.step === stepValue);
    return index !== -1 ? index : 0;
  };

  const [currentIndex, setCurrentIndex] = useState(getValidIndex(nextStep));

  useEffect(() => {
    setCurrentIndex(getValidIndex(nextStep));
  }, [nextStep]);

  const goToPreviousStep = () => {
    const prevIndex = currentIndex === 0 ? steps.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    handleStepButtonClick(steps[prevIndex].step);
  };

  const goToNextStep = () => {
    const nextIndex = currentIndex === steps.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    handleStepButtonClick(steps[nextIndex].step);
  };

  return (
    <div className="custom-slider">
      <div className="card">
        <div className="card-inner">
          <div className="card-text">
            <h3>{cardTexts[currentIndex].title}</h3>
            <p>{cardTexts[currentIndex].desc}</p>
          </div>
        </div>
      </div>
      <div className="slider-navigation">
        <button className="swiper-next" onClick={goToPreviousStep}>
          ❮
        </button>
        <button className="swiper-prev" onClick={goToNextStep}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;