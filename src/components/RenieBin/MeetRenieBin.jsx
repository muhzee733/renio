import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} position={[0, -1, 0]} />;
};

const MeetRenieBin = () => {
  const models = [
    "/assets/test.glb",
    "/assets/two-way.glb",
    "/assets/threee-way.glb",
    "/assets/four-way.glb",
  ];

  return (
    <div className="MeetRenieBin position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="meet-main-banner">
              <h2>Meet Renie Bins</h2>
              <p>Collect Multiple Waste Types in One Bin</p>
            </div>
            <div className="meet-image">
              <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                  300: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {models.map((model, index) => (
                  <SwiperSlide key={index}>
                    <Canvas style={{ height: "400px", width: "400px" }}>
                      <ambientLight intensity={1.2} />
                      <directionalLight position={[2, 2, 2]} intensity={1.5} />
                      <Model path={model} />
                      <OrbitControls
                        enableZoom={false}
                        minDistance={30}
                        maxDistance={3}
                      />
                    </Canvas>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetRenieBin;
