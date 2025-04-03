import React from "react";

const Model = () => {
  return (
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
  );
};

export default Model;
