import React from "react";
import H2 from "../Typography/H2";
import P from "../Typography/P";

const JoinNow = () => {
  return (
    <div className="JoinNow">
      <div class="container-xl">
        <div class="row">
          <div class="col-lg-8">
            <H2 title="Are you ready to turn waste into wealth?" />
            <P title="Join renie’s data monetization revolution today!" />
          </div>
          <div class="col-lg-4 d-flex align-items-center justify-content-center">
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
