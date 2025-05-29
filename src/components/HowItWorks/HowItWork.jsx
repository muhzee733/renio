import React, { useState } from "react";
import Slider from "../Slider";
import FlowDiagram from "../FlowDiagram";

const HowItWork = () => {
  const [step, setStep] = useState("Step 1");
  const [text, setText] = useState(0.25);
  const [nextStep, setNextStep] = useState(0.25);
  const [animating, setAnimating] = useState(false);

  const handleStepButtonClick = (newStep) => {
    setNextStep(newStep);
    setAnimating(true);
  };
  return (
    <div className="how-it-work-main">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-6 col-md-6 position-relative">
            <h2>HOW IT WORKS</h2>
            <Slider
              step={step}
              setText={setText}
              handleStepButtonClick={handleStepButtonClick}
              nextStep={nextStep}
            />
          </div>
          <div className="col-lg-6 col-md-6 custom-column">
            <div className="flow-diagram">
              <FlowDiagram
                setStep={setStep}
                text={text}
                setNextStep={setNextStep}
                setAnimating={setAnimating}
                handleStepButtonClick={handleStepButtonClick}
                nextStep={nextStep}
                animating={animating}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
