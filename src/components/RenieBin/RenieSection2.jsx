import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

gsap.registerPlugin(ScrollTrigger);

const RenieSection = () => {
  return (
    <div className="RenieSection2">
      <div className="RenieSection2-container">
        <div className="banner-svg-bin">
          <DotLottieReact src="/assets/website-wave.json" loop autoplay />
        </div>
        <div className="renie-card-parent">
          <div className="renie-card">
            <div
              className="renie-card-inner"
              style={{ width: "160px", height: "150px", marginLeft: "5px" }}
            >
              <DotLottieReact
                src="/assets/json/barcode.json"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <p className="text-dark mt-3 fw-semibold">
              Smart <br /> Barcode Reader
            </p>
          </div>
          <div className="renie-card">
            <div
              className="renie-card-inner"
              style={{ width: "160px", height: "150px", marginLeft: "5px" }}
            >
              <DotLottieReact
                src="/assets/json/led.json"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <p className="text-dark mt-4 ">
              LID <br />
              Automation
            </p>
          </div>
          <div className="renie-card">
            <div
              className="renie-card-inner"
              style={{ width: "160px", height: "150px", marginLeft: "5px" }}
            >
              <DotLottieReact
                src="/assets/json/light.json"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <p className="text-dark mt-4 ">
              Smart Light <br />
              Indication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenieSection;
