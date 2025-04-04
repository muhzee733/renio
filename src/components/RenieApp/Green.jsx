import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import H1 from "../Typography/H1";
import P from "../Typography/P";

gsap.registerPlugin(ScrollTrigger);

const Green = () => {
  const handleClick = (e) => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      e.preventDefault();
      window.location.href = "https://app.renie.io/";
    }
  };

  return (
    <div className="green">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mb-3">
              <H1 title=" Be part of the green revolution!" />
            </div>
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
                href="/qrcode"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
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
