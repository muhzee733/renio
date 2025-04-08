import React from "react";
import H1 from "../Typography/H1";
import P from "../Typography/P";

const HowItWork = () => {
  return (
    <>
      <div className="how-it-work">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12">
              <div className="will-work">
                <H1 title={"How it will work"} />
                <P
                  title={
                    "The process is simple. Once you express interest in our franchise, you will receive all the necessary information to get started. We offer comprehensive training, marketing support, and a step-by-step guide to help you set up and run your business successfully. Our dedicated team will be with you every step of the way."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;
