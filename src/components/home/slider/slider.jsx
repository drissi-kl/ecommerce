import "../../../style/home/slider.css";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function App() {

  const swiperData = [
    { image: 'banner_Hero1.jpg', text: "Choose your game, and we’ll provide the power." },
    { image: 'banner_Hero2.jpg', text: "Experience sound the smart way." },
    { image: 'banner_Hero3.jpg', text: "sdf asdf asd fsdf asdf" },
  ]

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}

        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        className="mySwiper"

      >
        {
          swiperData.map((item, index) => {
            return <SwiperSlide key={index}>
              <div className="swiper-item">
                <div className="contentSlider">
                  <p>{item.text}</p>
                  <button>show now</button>
                </div>
                <img src={item.image} alt={item.image} />
              </div>
            </SwiperSlide>
          })
        }



      </Swiper>
    </>
  );
}



