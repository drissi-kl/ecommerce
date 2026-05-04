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
    {image: 'banner_Hero1.jpg', text: "Choose your game, and we’ll provide the power."},
    {image: 'banner_Hero2.jpg', text: "Experience sound the smart way."},
    {image: 'banner_Hero3.jpg', text: "sdf asdf asd fsdf asdf"},
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
        <SwiperSlide>
          <div className="swiper-item">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, iure.</p>
            <img src="banner_Hero1.jpg" alt="" />
          </div>
        </SwiperSlide>

        
      </Swiper>
    </>
  );
}



