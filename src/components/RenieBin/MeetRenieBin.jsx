import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import H4 from "../Typography/H4";

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return (
    <primitive object={scene} position={[0, 0, 0]} rotation={[0, 0.6, 0]} />
  );
};

const MeetRenieBin = () => {
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
    <div className="MeetRenieBin">
      <div className="container-xl">
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="meet-main-banner">
              <h2>Meet Renie Bins</h2>
              <p>A range of Renie smart bins to fit every need</p>
            </div>
            <div className="meet-image d-flex justify-content-center align-items-center gap-4 flex-wrap">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="image-container text-center"
                  onClick={() => setSelectedModel(models[index])}
                  style={{ cursor: "pointer" }}
                >
                  <img src={img} alt={titles[index]} className="static-image" />
                  <H4 title={titles[index]} />
                </div>
              ))}
            </div>
            <div className="reniebin-paragraph">
              <p>
                Renie Bins are equipped with special sensors that mimic a
                vision-type experience, eliminating the need for expensive
                processing power. This cutting-edge technology ensures the bins
                remain as affordable as traditional, non-smart bins. Enjoy the
                benefits of smart waste management without the high costs,
              </p>
              <div className="renie-bin-custom">
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
                  <p>Cans</p>
                </div>
                <div>
                  <img src="/assets/Vector-5.webp" />
                  <p>Carton</p>
                </div>
                <div>
                  <img src="/assets/Vector-6.webp" />
                  <p>Glass</p>
                </div>
                <div>
                  <img src="/assets/Group-icon-1.png" />
                  <p>Vape</p>
                </div>
                <div>
                  <img src="/assets/Group-icon-2.png" />
                  <p>Battery</p>
                </div>
                <div>
                  <img src="/assets/Group-icon-3.png" />
                  <p>E-Waste</p>
                </div>
              </div>
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
            <Canvas style={{ height: "500px", width: "500px" }}>
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

export default MeetRenieBin;
