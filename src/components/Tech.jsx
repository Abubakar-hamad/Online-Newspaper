import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation"
import { A11y, EffectCards , Navigation, Pagination   } from "swiper";



import slide1 from '../assets/img/slide1.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'
import slide4 from '../assets/img/slide4.jpg'

const Tech = () => {
  return (
    <div className='container tech'>
   
    <h3  className='headtitle'>تكنولوجيا ومنوعات</h3>

    <div className="swip">

    
   <div className="techSwip">
   <span>تقنية وتكنولوجيا</span>
   <Swiper
     data-aos="fade-up"
     data-aos-delay="200"
     modules={[EffectCards, Pagination , Navigation , A11y]}
     effect={"cards"}
     style={{width:"40%" , position:'absolute'}}
     centeredSlides={true}
     loop={true}
     slidesPerView={"auto"}
     
     pagination={{ clickable: true }}
    
    >
      <SwiperSlide style={{width:'300px'}}><img src={slide1} style={{width:'100% ', height:"400px" }} alt="" /></SwiperSlide>
      <SwiperSlide style={{width:'300px'}}><img src={slide2} style={{width:'100% ', height:"400px" }} alt="" /></SwiperSlide>
      <SwiperSlide style={{width:'300px'}}><img src={slide3} style={{width:'100% ', height:"400px" }} alt="" /></SwiperSlide>
      <SwiperSlide style={{width:'300px'}}><img src={slide4} style={{width:'100% ', height:"400px" }} alt="" /></SwiperSlide>
    </Swiper>
   </div>

    <div className="mixSwip">
        <span>فن ومنوعات</span>
    <Swiper
     data-aos="fade-up"
     data-aos-delay="200"
     modules={[EffectCards, Pagination , Navigation , A11y]}
     effect={"cards"}
      
     centeredSlides={true}
     loop={true}
     slidesPerView={"auto"}
     
     pagination={{ clickable: true }}
     style={{width:"40%", position:'absolute'}}
    >
      <SwiperSlide style={{width:'300px'}}><img src={slide1} style={{width:'100% ', height:"400px" }} alt="" /></SwiperSlide>
      <SwiperSlide style={{width:'300px'}}><img src={slide2} style={{width:'100% ', height:"400px" }} alt="" /></SwiperSlide>
      <SwiperSlide style={{width:'300px'}}><img src={slide3} style={{width:'100% ', height:"400px" }} alt="" /></SwiperSlide>
      <SwiperSlide style={{width:'300px'}}><img src={slide4} style={{width:'100% ', height:"400px" }} alt="" /></SwiperSlide>
    </Swiper>
    </div>
    </div>
    </div>
  )
}

export default Tech