import React from "react";
import H2 from "../Typography/H2";
import P from "../Typography/P";

const JoinNow = () => {
  return (
    <div className="JoinNow">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-8">
            <H2 title="Ready to turn every bin into a branding opportunity?" />
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Join Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
