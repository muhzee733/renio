import Monitization from "@/components/Monitization/MonitizationDiv";
import WhyChoose from "@/components/Monitization/WhyChoose";
import Benefit from "@/components/Monitization/Benefit";
import Banner from "@/components/Monitization/Banner";
import RenieData from "@/components/Monitization/RenieData";

import { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import FutureData from "@/components/Monitization/FutureData";
import JoinNow from "@/components/Monitization/JoinNow";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Footer from "@/components/Navbar/Footer";
import Navbar from "@/components/Navbar/Navbar";

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
      const maxRotation = Math.PI / 2;
      const minRotation = -Math.PI / 2;

      scene.rotation.x = Math.max(
        minRotation,
        Math.min(maxRotation, mousePos.y * Math.PI)
      );
      scene.rotation.y = Math.max(
        minRotation,
        Math.min(maxRotation, mousePos.x * Math.PI)
      );
      const minZoom = 0;
      const maxZoom = 30;

      camera.position.z = Math.max(
        minZoom,
        Math.min(maxZoom, 5 + scrollPos * 0.02)
      );
    }
  });

  return <primitive object={scene} />;
};

const MonitizationSection = () => {
  return (
    <div
      className="monitization"
      style={{ position: "relative", height: "100vh" }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <img
          src="/assets/overlay.png"
          alt="Overlay"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            opacity: 0.5,
          }}
        />
      </div>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "black",
          zIndex: 0,
        }}
        camera={{ position: [0, 5, 5] }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Model />
        <OrbitControls minDistance={3} maxDistance={10} />
      </Canvas>

      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />
        <Banner />
        <Monitization />
        <RenieData />
        <WhyChoose />
        <Benefit />
        <FutureData />
        <JoinNow />
        <Footer />
        <MiniFooter />
      </div>
    </div>
  );
};

export default MonitizationSection;
