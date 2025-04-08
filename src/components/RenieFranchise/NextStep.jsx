import React from "react";
import H1 from "../Typography/H1";
import P from "../Typography/P";

const NextStep = () => {
  return (
    <>
      <div className="next-step">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12">
              <H1 title={"Take the next step"} />
              <P
                title={
                  "Ready to start your franchise journey with Renie.io? Contact us today to learn more about available opportunities and begin your path to success."
                }
              />
              <div className="designe">
                <a href="/contact" target="_blank" rel="noopener noreferrer">
                  <button>Join Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextStep;
