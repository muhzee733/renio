import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import H4 from "../Typography/H4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import H2 from "../Typography/H2";

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return (
    <primitive object={scene} position={[0, 0, 0]} rotation={[0, 0.6, 0]} />
  );
};

const FifthSection = () => {
  const images = [
    "/assets/2.png",
    "/assets/5.png",
    "/assets/3.png",
    "/assets/4.png",
  ];
  const titles = ["Renie One", "Renie Two", "Renie Maxi", "Renie Mini"];
  const models = [
    "/assets/test.glb",
    "/assets/two-way.glb",
    "/assets/threee-way.glb",
    "/assets/four-way.glb",
  ];

  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <div className="MeetRenieBin position-relative what-is-renie-bin">
      <div className="container-xl">
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="meet-main-banner">
              <h2>What is a Renie bin? </h2>
              <p>A range of Renie smart bins to fit every need</p>
              <p className="renie-bin-paragraph">
                Renie Bins are equipped with special sensors that mimic a
                vision-type experience, eliminating the need for expensive
                processing power. This cutting-edge technology ensures the bins
                remain as affordable as traditional, non-smart bins. Enjoy the
                benefits of smart waste management without the high costs
              </p>
            </div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              navigation
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
              className="meet-image"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="image-container text-center"
                    onClick={() => setSelectedModel(models[index])}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={img}
                      alt={titles[index]}
                      className="static-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="reniebin-paragraph">
              <div className="renie-bin-custo">
                <div>
                  <img src="/assets/Vector.webp" />
                  <p>Plastic bottles</p>
                </div>
                <div>
                  <img src="/assets/Vector-2.webp" />
                  <p>Plastic cups</p>
                </div>
                <div>
                  <img src="/assets/Vector-3.webp" />
                  <p>Paper cups</p>
                </div>
                <div>
                  <img src="/assets/Vector-4.webp" />
                  <p>ALUMINIUM Cans</p>
                </div>
                <div>
                  <img src="/assets/Vector-5.webp" />
                  <p>TETRA PACK</p>
                </div>
                <div>
                  <img src="/assets/Vector-6.webp" />
                  <p>Glass BOTTLES</p>
                </div>
                <div>
                  <img src="/assets/Group-icon-1.png" />
                  <p>Vapes</p>
                </div>
                <div>
                  <img src="/assets/Group-icon-2.png" />
                  <p>Batteries</p>
                </div>
                <div>
                  <img src="/assets/Group-icon-3.png" />
                  <p>E-Waste</p>
                </div>
              </div>
              <button
                className="btn-2 mt-5"
                onClick={() => (window.location.href = "/renielicense")}
              >
                Explore the Full demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedModel && (
        <div className="model-popup" id="custom-popup-2">
          <div className="model-popup-content">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedModel(null);
              }}
              className="close-btn"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "black",
                border: "none",
                cursor: "pointer",
                padding: "5px 10px",
                fontSize: "16px",
                zIndex: "999",
              }}
            >
              ✖
            </button>
            <Canvas
              style={{ height: "500px", width: "500px" }}
              className="custom-canvas"
            >
              <ambientLight intensity={1.2} />
              <directionalLight position={[2, 2, 2]} intensity={2} />
              <Model path={selectedModel} />
              <OrbitControls enableZoom={true} minDistance={30} />
            </Canvas>
          </div>
        </div>
      )}
    </div>
  );
};

export default FifthSection;
