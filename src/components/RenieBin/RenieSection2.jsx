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
            <img src="/assets/card-1.png" alt="card-1" />
            <p className="text-dark mt-4 ">Smart <br />Barcode Reader</p>
          </div>
          <div className="renie-card">
            <img src="/assets/card-2.png" alt="card-1" />
            <p className="text-dark mt-4 ">Smart Light <br />Indication</p>
          </div>
          <div className="renie-card">
            <img src="/assets/card-1.png" alt="card-1" />
            <p className="text-dark mt-4 ">Smart <br />Barcode Reader</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenieSection;
