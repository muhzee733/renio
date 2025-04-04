import React from "react";
import H2 from "../Typography/H2";
import P from "../Typography/P";
import H1 from "../Typography/H1";
import { useEffect } from "react";

const MonitizationDiv = () => {
  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video autoplayed successfully");
          })
          .catch((error) => {
            console.error("Autoplay failed:", error);
          });
      }
    }
  }, []);

  return (
    <div className="monitization-section">
      <div className="moni-wrapper">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-6 monitization-custom-data">
              <div>
                <H1 title="Why do we use data out of waste ? " />
                <P
                  title={`Waste itself isn't valuable enough to motivate everyone in the supply chain to recyle more. At Renie, we found that data extracted from waste can be monetized and it provides enough value to incentivize all participants. That's why we see waste as data—and as we know, data is one of the most valuable assets in today's world. `}
                />
                <br />
                <P
                  title={`This approach enables companies to recycle more materials, as the added value from data motivates greater participation across the entire recycling chain.`}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <video
                  width="100%"
                  height="30vh"
                  loop
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  style={{ objectFit: "cover", display: "block" }}
                >
                  <source src="/assets/money1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 custom-renie-moni-image">
              <img src="/assets/renie-monitization.webp" alt="renie" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitizationDiv;
