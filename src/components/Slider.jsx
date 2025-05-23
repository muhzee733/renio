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
      title: "Step 1: Waste Collection",
      desc: (
        <>
          It all begins when a consumer makes a simple choice: to drop their
          recyclable waste into a Renie Bin. These smart bins are more than just
          containers they’re gateways to a cleaner future. Each item deposited
          is scanned and logged, linking the action to a unique user profile. In
          return, consumers receive instant rewards through the Renie Rewards,
          creating a powerful incentive to recycle right, every time. This
          frictionless experience transforms passive disposal into active
          participation. And as more waste is collected, the system starts doing
          what it does best: turning physical materials into valuable data.
        </>
      ),
    },
    {
      title: "Step 2: Data Extraction:",
      desc: (
        <>
          Once recyclable waste enters a Renie Bin, the real magic begins. Our
          integrated sensors and recognition software analyze each item in real
          time identifying material types, brands, and packaging formats. This
          data is then securely transmitted to our cloud platform, where it’s
          aggregated, verified, and matched with environmental impact metrics.
          Every bottle, can, or box becomes a data point unlocking insights into
          consumption patterns, recycling behavior, and ESG performance
        </>
      ),
    },
    {
      title: "Step 3: Data Monetization",
      desc: (
        <>
          With Renie, recycling creates real value. For every verified ton of
          waste recycled through our system, organizations earn up to $500,
          credited directly to their digital wallet on Renie Hub. The data,
          backed by ISO-certified LCA studies, is ESG-compliant and monetizable.
          Clients can use it for impact reporting, sustainability goals, or
          simply to fund green initiatives. Renie makes recycling pay, literally
        </>
      ),
    },
    {
      title: "Step 4: Payout",
      desc: (
        <>
          Once waste is verified as collected and recycled, clients can request
          a payout directly through Renie Hub. Our system runs automated fraud
          checks, and funds are released within 5 working days. It’s fast,
          secure, and fully transparent, ensuring every dollar earned is backed
          by real environmental action.
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
