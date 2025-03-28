import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import H1 from "../Typography/H1";
import P from "../Typography/P";

gsap.registerPlugin(ScrollTrigger);

const Green = () => {
  return (
    <div className="green">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <H1 title=" Be Part of the Green Revolution!" />
            <P
              title="Every action counts. With the Renie Nexus, you’re not just
              disposing of waste—you’re contributing to a cleaner, smarter
              planet. Join thousands of eco-conscious users and make
              sustainability effortless!"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <a
                href="https://app.renie.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Explore the Renie Nexus</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Green;
