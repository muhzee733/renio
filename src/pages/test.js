"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/assets/test2.glb");
  return <primitive object={scene} scale={1} />;
};

const GLBViewer = () => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 3, 8] }}> {/* Camera is further back */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Model />
        <OrbitControls minDistance={40} maxDistance={15} /> {/* Zoom restrictions */}
      </Canvas>
    </div>
  );
};

export default GLBViewer;
