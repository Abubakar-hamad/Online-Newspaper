import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation"
import { A11y, EffectCards , Navigation, Pagination, Scrollbar   } from "swiper";



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
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="2000"
        modules={[EffectCards, Pagination , Navigation , Scrollbar , A11y]}
        effect={"cards"}
        //  grabCursor={true}
        
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        
        pagination={{ clickable: true }}
        
        >
          <SwiperSlide style={{width:'300px'}}>
            
            <div className="swiperCards">
                <div className="img">
              <img src={slide1} alt="" />
                </div>
                <div className="title">
      
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores.</h4>
                <a href="#">عرض </a>
                </div>
              </div>
              
              </SwiperSlide>

              <SwiperSlide style={{width:'300px'}}>
            
            <div className="swiperCards">
                <div className="img">
              <img src={slide1} alt="" />
                </div>
                <div className="title">
      
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores.</h4>
                <a href="#">عرض </a>
                </div>
              </div>
              
              </SwiperSlide>

              <SwiperSlide style={{width:'300px'}}>
            
            <div className="swiperCards">
                <div className="img">
              <img src={slide1} alt="" />
                </div>
                <div className="title">
      
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores.</h4>
                <a href="#">عرض </a>
                </div>
              </div>
              
              </SwiperSlide>

              
          
          </Swiper>
      </div>

      <div className="mixSwip">
          <span>فن ومنوعات</span>
      <Swiper
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="2000"
      modules={[EffectCards, Pagination , Navigation , A11y]}
      effect={"cards"}
      
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      
      pagination={{ clickable: true }}
    
      >
        <SwiperSlide style={{width:'300px'}}>
          
        <div className="swiperCards">
            <div className="img">
          <img src={slide1} alt="" />
            </div>
            <div className="title">

            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores.</h4>
            <a href="#">عرض </a>
            </div>
          </div>
          
          </SwiperSlide>
        
          <SwiperSlide style={{width:'300px'}}>
          
          <div className="swiperCards">
              <div className="img">
            <img src={slide2} alt="" />
              </div>
              <div className="title">
    
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores.</h4>
              <a href="#">عرض </a>
              </div>
            </div>
            
            </SwiperSlide>

            <SwiperSlide style={{width:'300px'}}>
          
          <div className="swiperCards">
              <div className="img">
            <img src={slide3} alt="" />
              </div>
              <div className="title">
    
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores.</h4>
              <a href="#">عرض </a>
              </div>
            </div>
            
            </SwiperSlide>

            <SwiperSlide style={{width:'300px'}}>
          
          <div className="swiperCards">
              <div className="img">
            <img src={slide4} alt="" />
              </div>
              <div className="title">
    
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores.</h4>
              <a href="#">عرض </a>
              </div>
            </div>
            
            </SwiperSlide>
      </Swiper>
      </div>
  </div>
    </div>
  )
}

export default Tech