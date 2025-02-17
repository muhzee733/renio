import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/assets/lightstrates.glb");
  const [scrollPos, setScrollPos] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(({ camera }) => {
    if (scene) {
      const maxRotation = Math.PI / 2; // Maximum rotation of 90 degrees
      const minRotation = -Math.PI / 2; // Minimum rotation of -90 degrees

      scene.rotation.x = Math.max(
        minRotation,
        Math.min(maxRotation, mousePos.y * Math.PI)
      ); // Limit rotation on X
      scene.rotation.y = Math.max(
        minRotation,
        Math.min(maxRotation, mousePos.x * Math.PI)
      ); // Limit rotation on Y

      // Restrict zoom-in by setting a minimum zoom level
      const minZoom = 0; // Prevent zooming in too close
      const maxZoom = 30; // Allow zooming out more

      camera.position.z = Math.max(
        minZoom,
        Math.min(maxZoom, 5 + scrollPos * 0.02)
      ); // Zoom in/out within limits
    }
  });

  return <primitive object={scene} />;
};

const Model3D = () => {
  return (
    <div style={{ position: "fixed", height: "100vh", width: "100%", zIndex: -1 }}>
      <img
        src="/assets/overlay.png"
        alt="Overlay"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          width: "100%",
          height: "100vh",
          opacity: 0.5,
        }}
      />

      <Canvas
        style={{ height: "100vh", width: "100%", background: "black" }}
        camera={{ position: [0, 5, 5] }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Model />
        <OrbitControls minDistance={3} maxDistance={10} />
      </Canvas>
    </div>
  );
};

export default Model3D;
