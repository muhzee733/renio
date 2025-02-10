import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const Slide1 = ({ img, title1, title2, price1, price2 }) => {
  const [open, setOpen] = useState(false);

  const togglePopup = () => {
    setOpen(!open);
  };

  function Model() {
    const { scene } = useGLTF("/assets/onemodel.glb");
    return <primitive object={scene} />;
  }

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
      <div className="container">
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
                onClick={togglePopup}
                src="/assets/360-icon.png"
                alt="360"
                style={{ cursor: "pointer" }}
              />
              <img src={img} alt="RENIE_ONE" />
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
            <div className="renio-grid" id="derktop-version">
              <h5>Available Waste Streams</h5>
              <div className="renio-grid-system">
                <div>
                  <img src="/assets/Vector.png" alt="Plastic Bottles" />
                  <h6>Plastic Bottles</h6>
                </div>
                <div>
                  <img src="/assets/Vector-2.png" alt="Plastic Cups" />
                  <h6>Plastic Cups</h6>
                </div>
                <div>
                  <img src="/assets/Vector-3.png" alt="Paper Cups" />
                  <h6>Paper Cups</h6>
                </div>
                <div>
                  <img src="/assets/Vector-4.png" alt="Cans" />
                  <h6>Cans</h6>
                </div>
                <div>
                  <img src="/assets/Vector-5.png" alt="Tetra Pak" />
                  <h6>Tetra Pak</h6>
                </div>
                <div>
                  <img src="/assets/Vector-6.png" alt="Glass" />
                  <h6>Glass</h6>
                </div>
              </div>
            </div>
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

        {open && (
          <>
            <div className="popup">
              <button type="button" className="close" onClick={togglePopup}>
                <span>&times;</span>
              </button>
              <Canvas>
                <ambientLight intensity={1.2} />
                <directionalLight position={[2, 2, 2]} intensity={1.5} />
                <Model />
                <OrbitControls
                  enableZoom={true}
                  minDistance={1}
                  maxDistance={2}
                />
              </Canvas>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Slide1;
