import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import H1 from '../Typography/H1';

const carouselImages = [
  '/assets/binscarosel/bin-1.webp',
  '/assets/binscarosel/bin-2.webp',
  '/assets/binscarosel/bin-3.webp',
  '/assets/binscarosel/bin-4.webp',
  '/assets/binscarosel/bin-5.webp',
  '/assets/binscarosel/bin-6.webp',
  '/assets/binscarosel/bin-7.webp',
  '/assets/binscarosel/bin-8.webp',
  // Add more as needed
];

const CustomizeBin = () => {
  return (
    <div className='customized-bin'>
      <div className="container-xl">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="p-5 rounded-4 h-100 d-flex flex-column align-items-start justify-content-center customize-bin-left-bg">
            <div className='customize-bin-left-h1'><H1 title={'Customize'} /></div>
            <div className='customize-bin-left-bg-h1'><H1 title={'your bin'} /></div>
            <img
              src="/assets/renie-update/old-renie.png"
              alt="Customize Example"
              className="img-fluid"
            />
          </div>
        </div>
        {/* Right Column */}
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="p-4 rounded-4 d-flex flex-column align-items-center position-relative customize-bin-carousel-bg" style={{ minWidth: 350, minHeight: 400 }}>
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              navigation
              className="w-100"
            >
              {carouselImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Bin Carousel ${idx + 1}`}
                    className="img-fluid"
                  />
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

export default CustomizeBin;