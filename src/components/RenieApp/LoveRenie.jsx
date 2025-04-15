import React from "react";
import Lottie from "react-lottie";
import H2 from "@/components/Typography/H2";
import H4 from "@/components/Typography/H4";
import animation1 from "@/animations/animate-svg-1.json";
import animation3 from "@/animations/animate-svg-2.json";
import animation4 from "@/animations/animate-svg-3.json";


const cardData = [
  {
    type: "lottie",
    animation: animation1,
    title: "No registration & downloads needed.",
  },
  {
    type: "svg",
    src: "/assets/animate-svg-2.svg",
    title: "Easily locate the nearest Renie Bin and navigate to it.",
  },
  {
    type: "lottie",
    animation: animation3,
    title: "No vouchers or discounts—just real, valuable rewards!",
  },
  {
    type: "lottie",
    animation: animation4,
    title: "Track Every Bottle, Measure Your Impact",
  },
];

const LoveRenie = () => {
  return (
    <div className="renie-love py-5">
      <div className="container-xl">
        <div className="row text-center mb-5">
          <div className="col-12">
            <H2 title="Why You’ll Love ❤︎ Renie Nexus" />
          </div>
        </div>

        <div className="row justify-content-center text-center custom-data-svg">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="col-sm-6 col-md-6 col-lg-3 d-flex flex-column align-items-center mb-4"
            >
              <div>
                <div className="media-container">
                  {card.type === "lottie" ? (
                    <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: card.animation,
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice",
                        },
                      }}
                      height={300}
                      width={300}
                    />
                  ) : (
                    <object
                      data={card.src}
                      type="image/svg+xml"
                      className="svg-image"
                      style={{
                        maxHeight: "100%",
                        width: "100%",
                        marginBottom: "0",
                      }}
                    ></object>
                  )}
                </div>
                <H4 title={card.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveRenie;
