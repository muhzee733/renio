import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} position={[0, -1, 0]}/>;
};

const MeetRenieBin = () => {
  const models = [
    "/assets/test.glb",
    "/assets/two-way.glb",
    "/assets/threee-way.glb",
    "/assets/four-way.glb",
  ];

  return (
    <div className="MeetRenieBin">
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
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {models.map((model, index) => (
                  <SwiperSlide key={index}>
                    <Canvas style={{ height: "400px", width: "400px" }}>
                      <ambientLight intensity={1.2} />
                      <directionalLight position={[2, 2, 2]} intensity={2} />
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
            <div className="reniebin-paragraph">
              <p>
                Renie Bins are equipped with special sensors that mimic a
                vision-type experience, eliminating the need for expensive
                processing power. This cutting-edge technology ensures the bins
                remain as affordable as traditional, non-smart bins. Enjoy the
                benefits of smart waste management without the high costs,
              </p>
              <div className="renie-bin-custom">
                <div>
                  <img src="/assets/Vector.webp" />
                  <p>Plastic Bottles</p>
                </div>
                <div>
                  <img src="/assets/Vector-2.webp" />
                  <p>Plastic Cups</p>
                </div>
                <div>
                  <img src="/assets/Vector-3.webp" />
                  <p>Paper Cups</p>
                </div>
                <div>
                  <img src="/assets/Vector-4.webp" />
                  <p>Cans</p>
                </div>
                <div>
                  <img src="/assets/Vector-5.webp" />
                  <p>Tetra Pak</p>
                </div>
                <div>
                  <img src="/assets/Vector-6.webp" />
                  <p>Glass</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetRenieBin;
