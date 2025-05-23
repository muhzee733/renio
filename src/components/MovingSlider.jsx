import React from "react";

const allLogos = [
  "/assets/ajmanmuncipality-logo.webp",
  "/assets/adea-logo.webp",
  "/assets/ajmantourism-logo.webp",
  "/assets/dubaimuncipality-logo.webp",
  "/assets/majidalfuttaim-logo.webp",
  "/assets/nakheel-logo.webp",
  "/assets/nfpc-logo.webp",
  "/assets/tetrapak-logo.webp",
  "/assets/uber-logo.webp",
  "/assets/dubailholding-logo.webp",
  "/assets/universityofsharjah-logo.webp",
];

const MovingSlider = () => {
  return (
    <div className="slider-wrapper container">
      <div id="moving-div">
        {/* <div id="blur-left"></div> */}
        <div className="move">
          {allLogos.map((logo, index) => (
            <img key={`logo-1-${index}`} src={logo} alt={`logo-${index}`} />
          ))}
        </div>
        <div className="move">
          {allLogos.map((logo, index) => (
            <img key={`logo-2-${index}`} src={logo} alt={`logo-${index}`} />
          ))}
        </div>

        {/* <div id="blur-right"></div> */}
      </div>

      <style jsx>{`
        .slider-wrapper {
          position: relative;
        }

        #moving-div {
          position: absolute;
          top: 0%;
          white-space: nowrap;
          padding: 3.2vw;
          overflow: hidden;
          width: 100%;
        }

        .move {
          display: inline-block;
          animation: mobe 12s linear infinite;
        }

        .move img {
          height: 40px;
          margin: 0 1.2vw;
        }

        @keyframes mobe {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        #blur-left {
          height: 100%;
          width: 10%;
          background: linear-gradient(to right, #fff, transparent);
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
        }

        #blur-right {
          height: 100%;
          width: 10%;
          background: linear-gradient(to left, #fff, transparent);
          position: absolute;
          top: 0;
          right: 0;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default MovingSlider;
