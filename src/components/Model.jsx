import { useGLTF } from "@react-three/drei";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={[1.5, 1.5, 1.9]} />;
};

export default Model;
