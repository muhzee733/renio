import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Slider = ({ handleStepButtonClick, nextStep }) => {
  const steps = [
    { step: 0.25, label: "Step 1" },
    { step: 0.35, label: "Step 2" },
    { step: 0.65, label: "Step 3" },
    { step: 1, label: "Step 4" },
  ];

  const cardTexts = [
    {
      title: "Step 1: Purchase Renie bins",
      desc: (
        <>
          Renie Bins represent a revolutionary approach to waste management,
          <br />
          transforming how you handle recyclable waste. These intelligent bins
          are
          <br />
          designed to segregate waste at the source, utilizing advanced
          recognition
          <br />
          technology to ensure precise waste stream separation.
          <br /><br />
          Key Features:
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
      desc: "Sorting recyclables effectively helps reduce waste contamination. Use separate bins for paper, plastics, metals, and glass to enhance the efficiency of the recycling process.",
    },
    {
      title: "Step 3: Drop off at the recycling center",
      desc: "Locate your nearest recycling center and drop off your sorted waste in designated bins. Many centers offer incentives for responsible waste disposal.",
    },
    {
      title: "Step 4: Monitor waste reduction",
      desc: "Track your progress by measuring how much waste you have diverted from landfills. Use waste reduction apps to monitor and improve your recycling habits.",
    },
  ];

  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      const slideIndex = steps.findIndex(
        (stepObj) => stepObj.step === nextStep
      );
      if (slideIndex !== -1) {
        swiperRef.current.swiper.slideTo(slideIndex);
      }
    }
  }, [nextStep]);

  const resetSlider = () => {
    handleStepButtonClick(0);
  };

  const goToPreviousStep = () => {
    const currentIndex = steps.findIndex(
      (stepObj) => stepObj.step === nextStep
    );
    const prevIndex = currentIndex === 0 ? steps.length - 1 : currentIndex - 1;
    handleStepButtonClick(steps[prevIndex].step);
  };

  const goToNextStep = () => {
    const currentIndex = steps.findIndex(
      (stepObj) => stepObj.step === nextStep
    );
    const nextIndex = currentIndex === steps.length - 1 ? 0 : currentIndex + 1;
    handleStepButtonClick(steps[nextIndex].step);
  };

  return (
    <div className="swiper-container">
      <div className="card">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={10}
          navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
          modules={[Navigation]}
          draggable={false}
        >
          {steps.map((stepObj, index) => (
            <SwiperSlide key={index}>
              <div className="card-inner">
                <div className="card-text">
                  <h3>{cardTexts[index].title}</h3>
                  <p>{cardTexts[index].desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-navigation">
        <button className="swiper-prev" onClick={goToPreviousStep}>
          ❮
        </button>
        <button className="swiper-next" onClick={goToNextStep}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;
