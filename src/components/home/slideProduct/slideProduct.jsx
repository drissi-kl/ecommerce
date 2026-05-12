import React from 'react'
import Product from './product'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import "../../../style/home/slideProduct.css";
import { Autoplay, Pagination } from 'swiper/modules';


export default function SlideProduct() {

    const data = ['/phone1.avif', '/phone2.png', '/phone3.jpeg', '/phone4.png', '/phone5.png', '/phone6.png'];

    return <main className='px-[200px] py-5'>
        <h1 className='font-bold text-xl text-blue-600 '>smartphones</h1>
        <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dolores.</p>
        
        <div className='relative'>
            <div className='border border-[1px solid] border-zinc-400 absolute top-0 left-0 w-[100%] '></div>
            <div className='border border-[1px solid] border-blue-600 absolute top-0 left-0 w-[10%] '></div>
        </div>

        <div className='slideProducts'>
            <Swiper
                modules={[Pagination, Autoplay]}

                spaceBetween={10}

                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                slidesPerView={4}
                // autoplay={{
                //     delay: 3000,
                // }}
                loop={true}
                className="mySwiper"
            >
                
                {
                    data.map((dt, index)=>{return <SwiperSlide > 
                        <Product image={dt} key={index} /> 
                        </SwiperSlide> })
                }
                
            </Swiper>
        </div>
    
    </main>
  
}
