import React from "react";
import H4 from "./Typography/H4";
import H2 from "./Typography/H2";
import P from "./Typography/P";
import H1 from "./Typography/H1";

const RecycleSection = () => {
  return (
    <>
      <div className="recycleSection">
        <div className="container-xl">
          <div className="row align-items-center text-white">
            <div className="col-md-12 col-lg-6 text-center mb-4 mb-md-0">
              <div className="position-relative d-inline-block">
                <img
                  src="/assets/reniehub/recycle.png"
                  alt="Trash Bin"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="recycle-content">
                <H2 title="Waste is everywhere Value is nowhere" />
                <H4
                  title={
                    "Recyclable waste is thrown away every day, and its data, impact,     and financial value are wasted with it."
                  }
                />
                <P
                  title={
                    "Despite growing ESG pressure and public commitments, most organizations:"
                  }
                />
                <ul
                  className="text-light ps-3"
                  style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
                >
                  <li>Can't verify if waste was truly recovered</li>
                  <li>Can't track impact or CO₂ savings</li>
                  <li>Can't ensure if it's done by the right thing</li>
                  <li>And worst of all: can't monetize any of it</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recycleSection-2">
        <div className="container-xl px-3 px-md-5 py-5">
          <div className="row align-items-center mt-4">
            <div className="col-md-12 col-lg-6 text-center mb-4 mb-md-0">
              <img
                src="/assets/reniehub/renie-bin.png"
                alt="Recycle & Earn Box"
                className="img-fluid"
              />
            </div>
            <div className="col-md-12 col-lg-6 text-start">
              <div class="new-section-2">
                <H1 title="Meet the Recycling System That Pays You Back" />
                <H4
                  title="For every ton collected and confirmed, Renie unlocks real
              financial rewards — powered by data, not guesswork."
                />
                <P title="With Renie, recycling becomes traceable and profitable" />
                <ul className="text-dark ps-3">
                  <li>Smart bins track waste flow</li>
                  <li>$500/ton reward potential</li>
                  <li>ESG reports, ready to export</li>
                </ul>
                <button className="btn btn-danger mt-2">
                  Explore the Full demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecycleSection;
