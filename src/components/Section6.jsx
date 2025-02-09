import React,{useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Section6 = () => {
  return (
    <>
      <div className=" bg-white software">
        <div className="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 d-flex align-items-center">
              <div className="software-left d-flex gap-4 w-100 align-items-center">
                <img src="/assets/re-logo.png" width="auto" />
                <div className="">
                  <h2>Renie</h2>
                  <h6>Software</h6>
                  <p>Where everything comes together</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div className="software-right-column">
                <Swiper
                  slidesPerView={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                >
                  <SwiperSlide>
                    <div className="software-right-container">
                      <img src="/assets/renie-hub.png" />
                      <span>Renie Admin</span>
                      <p>
                        The core software that manages all the Renie bins in one
                        place
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="software-right-container">
                      <img src="/assets/renie-hub.png" />
                      <span>Renie Admin</span>
                      <p>
                        The core software that manages all the Renie bins in one
                        place
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="software-right-container">
                      <img src="/assets/renie-hub.png" />
                      <span>Renie Admin</span>
                      <p>
                        The core software that manages all the Renie bins in one
                        place
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
