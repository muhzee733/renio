import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const RenieSection = () => {
  return (
    <div className="RenieSection2">
      <div className="RenieSection2-container">
        <div className="banner-svg-bin">
          <iframe
            src="/assets/Website-Wave.svg"
            className="banner-svg-renie"
          ></iframe>
        </div>
        <div className="renie-card-parent">
          <div className="renie-card">
            <iframe
              src="/assets/icon-6.svg"
              className="banner-sv"
              style={{ border: "none" }}
              title="Barcode Icon"
            ></iframe>
            <p className="text-dark mt-3 fw-semibold">
              Smart <br /> Barcode Reader
            </p>
          </div>
          <div className="renie-card">
            <iframe src="/assets/icon-7.svg" className="banner-sv"></iframe>
            <p className="text-dark mt-4 ">
              Smart Light <br />
              Indication
            </p>
          </div>
          <div className="renie-card">
            <iframe src="/assets/icon-8.svg" className="banner-sv"></iframe>
            <p className="text-dark mt-4 ">
              LID <br />
              Automation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenieSection;
