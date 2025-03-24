import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { useGLTF, OrbitControls } from "@react-three/drei";

const Slide1 = ({ title1, title2, price1, price2 }) => {
  const iconRef = useRef(null);
  function Model() {
    const { scene } = useGLTF("/assets/test.glb");
    return (
      <primitive
        object={scene}
        position={[-7, 0, 0]}
        rotation={[0, (Math.PI / 180) * 50, 0]}
      />
    );
  }
  function ModelTwo() {
    const { scene } = useGLTF("/assets/two-way.glb");
    return (
      <primitive
        object={scene}
        position={[-7, 0, 0]}
        rotation={[0, (Math.PI / 180) * 50, 0]}
      />
    );
  }
  function ModelThree() {
    const { scene } = useGLTF("/assets/threee-way.glb");
    return (
      <primitive
        object={scene}
        position={[-7, 0, 0]}
        rotation={[0, (Math.PI / 180) * 50, 0]}
      />
    );
  }
  function ModelFour() {
    const { scene } = useGLTF("/assets/four-way.glb");
    return (
      <primitive
        object={scene}
        position={[-3, 0, 0]}
        rotation={[0, (Math.PI / 180) * 50, 0]}
      />
    );
  }

  const handleMouseEnter = (e) => {
    gsap.to(iconRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      x: e.nativeEvent.offsetX - 20,
      y: e.nativeEvent.offsetY - 20,
    });
  };

  const handleMouseMove = (e) => {
    gsap.to(iconRef.current, {
      x: e.nativeEvent.offsetX - 20,
      y: e.nativeEvent.offsetY - 20,
      duration: 0.1,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(iconRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
    });
  };

  return (
    <div
      className={
        title1 === "RENIE ONE"
          ? "slide-1 renio-one"
          : title1 === "RENIE Two"
          ? "slide-1 renio-two"
          : title1 === "RENIE Maxi"
          ? "slide-1 renio-Maxi"
          : title1 === "RENIE Mini"
          ? "slide-1 renio-Mini"
          : "slide-1"
      }
    >
      <div className="container-xl">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-lg-6 col-md-6">
            <h2 className="text-center" id="mobile-version">
              {title2}
            </h2>
            <div className="renio-button" id="mobile-version">
              <button className={title1 === "RENIE ONE" ? "active" : ""}>
                Renie one
              </button>
              <button className={title1 === "RENIE Two" ? "active" : ""}>
                Renie Two
              </button>
              <button className={title1 === "RENIE Maxi" ? "active" : ""}>
                Renie Maxi
              </button>
              <button className={title1 === "RENIE Mini" ? "active" : ""}>
                Renie Mini
              </button>
            </div>
            <div className="left-box">
              <h2>{title1}</h2>
              <img
                className="threed-image"
                src="/assets/360-icon.webp"
                alt="360"
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  bottom: "-80px",
                  left: "0",
                }}
              />
              <div
                className="image-container"
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ position: "relative", display: "inline-block" }}
              >
                {title1 === "RENIE ONE" ? (
                  <>
                    <Canvas style={{ height: "500px", width: "500px" }}>
                      <ambientLight intensity={1.2} />
                      <directionalLight position={[1, 1, 1]} intensity={1.5} />
                      <Model />
                      <OrbitControls
                        enableZoom={false}
                        minDistance={30}
                        maxDistance={3}
                      />
                    </Canvas>
                  </>
                ) : (
                  ""
                )}
                {title1 === "RENIE Two" ? (
                  <>
                    <Canvas style={{ height: "500px", width: "500px" }}>
                      <ambientLight intensity={1.2} />
                      <directionalLight position={[2, 2, 2]} intensity={1.5} />
                      <ModelTwo />
                      <OrbitControls
                        enableZoom={false}
                        minDistance={30}
                        maxDistance={3}
                      />
                    </Canvas>
                  </>
                ) : (
                  ""
                )}
                {title1 === "RENIE Maxi" ? (
                  <>
                    <Canvas style={{ height: "500px", width: "500px" }}>
                      <ambientLight intensity={1.2} />
                      <directionalLight position={[2, 2, 2]} intensity={1.5} />
                      <ModelThree />
                      <OrbitControls
                        enableZoom={false}
                        minDistance={40}
                        maxDistance={3}
                      />
                    </Canvas>
                  </>
                ) : (
                  ""
                )}
                {title1 === "RENIE Mini" ? (
                  <>
                    <Canvas style={{ height: "500px", width: "500px" }}>
                      <ambientLight intensity={1.2} />
                      <directionalLight position={[2, 2, 2]} intensity={1.5} />
                      <ModelFour />
                      <OrbitControls
                        enableZoom={false}
                        minDistance={25}
                        maxDistance={3}
                      />
                    </Canvas>
                  </>
                ) : (
                  ""
                )}
                <img
                  ref={iconRef}
                  className="threed-image"
                  src="/assets/360-icon.webp"
                  alt="360"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 0,
                    transform: "scale(0.5)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <h2 className="text-right" id="derktop-version">
              {title2}
            </h2>
            <div className="renio-button" id="derktop-version">
              <button className={title1 === "RENIE ONE" ? "active" : ""}>
                Renie one
              </button>
              <button className={title1 === "RENIE Two" ? "active" : ""}>
                Renie Two
              </button>
              <button className={title1 === "RENIE Maxi" ? "active" : ""}>
                Renie Maxi
              </button>
              <button className={title1 === "RENIE Mini" ? "active" : ""}>
                Renie Mini
              </button>
            </div>
            {title1 === "RENIE Mini" ? (
              <div className="renio-grid" id="derktop-version">
                <h5>Available Waste Streams</h5>
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
              <div className="renio-grid" id="derktop-version">
                <h5>Available Waste Streams</h5>
                <div className="renio-grid-system">
                  <div>
                    <img src="/assets/Vector.webp" alt="Plastic Bottles" />
                    <h6>Plastic Bottles</h6>
                  </div>
                  <div>
                    <img src="/assets/Vector-2.webp" alt="Plastic Cups" />
                    <h6>Plastic Cups</h6>
                  </div>
                  <div>
                    <img src="/assets/Vector-3.webp" alt="Paper Cups" />
                    <h6>Paper Cups</h6>
                  </div>
                  <div>
                    <img src="/assets/Vector-4.webp" alt="Cans" />
                    <h6>Cans</h6>
                  </div>
                  <div>
                    <img src="/assets/Vector-5.webp" alt="Tetra Pak" />
                    <h6>Tetra Pak</h6>
                  </div>
                  <div>
                    <img src="/assets/Vector-6.webp" alt="Glass" />
                    <h6>Glass</h6>
                  </div>
                </div>
              </div>
            )}
            <div className="renio-footer">
              <h5 className="text-center text-white mt-5 mb-3">Pricing</h5>
              <div className="renio-footer-div">
                <div>
                  <h6 className="custom-heading">Standard Design</h6>
                  <h5 className="custom-price">{price1} AED</h5>
                </div>
                <div>
                  <h6 className="custom-heading">Custom Design</h6>
                  <h5 className="custom-price">{price2} AED</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
