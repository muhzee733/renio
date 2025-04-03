import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import H4 from "../Typography/H4";

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} position={[0, 0, 0]} rotation={[0, 0.6, 0]} />;
};

const MeetRenieBin = () => {
  const images = [
    "/assets/2.png",
    "/assets/5.png",
    "/assets/3.png",
    "/assets/4.png",
  ];
  const titles = ["RENIE ONE", "RENIE TWO", "RENIE MAXI", "RENIE MINI"];
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
          </div>
        </div>
      </div>

      {selectedModel && (
        <div className="model-popup" id="custom-popup">
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
