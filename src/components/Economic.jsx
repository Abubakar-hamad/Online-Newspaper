import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"
import { A11y, EffectCoverflow, Navigation, Pagination   } from "swiper";



import slide1 from '../assets/img/slide1.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'
import slide4 from '../assets/img/slide4.jpg'

const Economic = () => {
  return (
    <div className='container'>
        <h3  className='headtitle'>الاقتصادية</h3>

        <Swiper
     data-aos="fade-up"
     data-aos-delay="200"
     modules={[EffectCoverflow, Pagination , Navigation , A11y]}
     effect={"coverflow"}
    //  grabCursor={true}
     centeredSlides={true}
     loop={true}
     slidesPerView={"auto"}
     navigation
     pagination={{ clickable: true }}

     EffectCoverflow={{
       
       stretch: 0,
       depth: 100,
       modifier: 1, 
       slideShadows: true,
     }}
    >
      <SwiperSlide style={{width:'300px'}}><img src={slide1} style={{width:'100% ', height:"400px" }} alt="" /></SwiperSlide>
      <SwiperSlide style={{width:'300px'}}><img src={slide2} style={{width:'100% ', height:"400px" }} alt="" /></SwiperSlide>
      <SwiperSlide style={{width:'300px'}}><img src={slide3} style={{width:'100% ', height:"400px" }} alt="" /></SwiperSlide>
      <SwiperSlide style={{width:'300px'}}><img src={slide4} style={{width:'100% ', height:"400px" }} alt="" /></SwiperSlide>
    </Swiper>

    </div>
  )
}

export default Economic