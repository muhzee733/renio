import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useState } from "react";

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return (
    <primitive object={scene} position={[0, 0, 0]} rotation={[0, 0.6, 0]} />
  );
};

const Slide1 = ({ title1, title2, price1, price2, model }) => {
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <div
      className={
        title1 === "Renie one"
          ? "slide-1 renio-one"
          : title1 === "Renie two"
          ? "slide-1 renio-two"
          : title1 === "Renie maxi"
          ? "slide-1 renio-Maxi"
          : title1 === "Renie mini"
          ? "slide-1 renio-Mini"
          : "slide-1"
      }
    >
      <div className="container-xl">
        <h2 className="text-center" id="derktop-version">
          {title2}
        </h2>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <h2 className="text-center" id="mobile-version">
              {title2}
            </h2>
            <div className="renio-button none-on-mobile" id="mobile-version">
              <button className={title1 === "Renie one" ? "active" : ""}>
                Renie one
              </button>
              <button className={title1 === "Renie two" ? "active" : ""}>
                Renie two
              </button>
              <button className={title1 === "Renie maxi" ? "active" : ""}>
                Renie Maxi
              </button>
              <button className={title1 === "Renie mini" ? "active" : ""}>
                Renie Mini
              </button>
            </div>
            <div className="left-box">
              <h4 className="text-center">{title1}</h4>
              <div className="image-container">
                {title1 === "Renie one" ? (
                  <>
                    <img
                      onClick={() => setSelectedModel(model)}
                      src="/assets/2.png"
                    />
                  </>
                ) : (
                  ""
                )}
                {title1 === "Renie two" ? (
                  <>
                    <img
                      onClick={() => setSelectedModel(model)}
                      src="/assets/5.png"
                    />
                  </>
                ) : (
                  ""
                )}
                {title1 === "Renie maxi" ? (
                  <>
                    <img
                      onClick={() => setSelectedModel(model)}
                      src="/assets/3.png"
                    />
                  </>
                ) : (
                  ""
                )}
                {title1 === "Renie mini" ? (
                  <>
                    <img
                      onClick={() => setSelectedModel(model)}
                      src="/assets/4-bin.webp"
                    />
                  </>
                ) : (
                  ""
                )}
                <img
                  className="threed-image"
                  src="/assets/360-icon.webp"
                  alt="360"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="renio-button" id="derktop-version">
              <button className={title1 === "Renie one" ? "active" : ""}>
                Renie One
              </button>
              <button className={title1 === "Renie two" ? "active" : ""}>
                Renie Two
              </button>
              <button className={title1 === "Renie maxi" ? "active" : ""}>
                Renie Maxi
              </button>
              <button className={title1 === "Renie mini" ? "active" : ""}>
                Renie Mini
              </button>
            </div>
            {title1 === "Renie mini" ? (
              <div className="renio-grid" id="derktop-versio">
                <h5>Available waste streams</h5>
                <div className="renio-grid-system">
                  <div>
                    <img src="/assets/Group-icon-1.png" alt="Plastic Bottles" />
                    <h6>Vape</h6>
                  </div>
                  <div>
                    <img src="/assets/Group-icon-2.png" alt="Plastic Cups" />
                    <h6>Battery</h6>
                  </div>
                  <div>
                    <img src="/assets/Group-icon-3.png" alt="Paper Cups" />
                    <h6>E-Waste</h6>
                  </div>
                </div>
              </div>
            ) : (
              <div className="renio-grid" id="derktop-versio">
                <h5>Available waste streams</h5>
                <div className="renio-grid-system">
                  <div>
                    <img src="/assets/Vector.webp" alt="Plastic Bottles" />
                    <h6>Plastic bottles</h6>
                  </div>
                  <div>
                    <img src="/assets/Vector-2.webp" alt="Plastic Cups" />
                    <h6>Plastic cups</h6>
                  </div>
                  <div>
                    <img src="/assets/Vector-3.webp" alt="Paper Cups" />
                    <h6>Paper cups</h6>
                  </div>
                  <div>
                    <img src="/assets/Vector-4.webp" alt="Cans" />
                    <h6>Cans</h6>
                  </div>
                  <div>
                    <img src="/assets/Vector-5.webp" alt="Tetra Pak" />
                    <h6>Carton</h6>
                  </div>
                  <div>
                    <img src="/assets/Vector-6.webp" alt="Glass" />
                    <h6>Glass</h6>
                  </div>
                </div>
              </div>
            )}
            {/* <div className="renio-footer">
              <h5 className="text-center text-white mt-5 mb-3">Pricing</h5>
              <div className="renio-footer-div">
                <div>
                  <h6 className="custom-heading">Standard design</h6>
                  <h5 className="custom-price">{price1} AED</h5>
                </div>
                <div>
                  <h6 className="custom-heading">Custom design</h6>
                  <h5 className="custom-price">{price2} AED</h5>
                </div>
              </div>
            </div> */}
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
            <Canvas style={{ height: "500px", width: "500px" }} className="custom-3d-model">
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

export default Slide1;
