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
     data-aos-duration="3000"
     modules={[EffectCoverflow, Pagination , Navigation , A11y]}
     effect={"coverflow"}
    //  grabCursor={true}
     centeredSlides={true}
     loop={true}
     slidesPerView={"auto"}
     grabCursor={true}
     navigation
     pagination={{ clickable: true }}

     EffectCoverflow={{
       
       stretch: 0,
       depth: 100,
       modifier: 1, 
       slideShadows: true,
     }}
    >
      <SwiperSlide style={{width:'300px'}}>
        <div className="swiperCard">
          <div className="img">
        <img src={slide1} alt="" />
          </div>
          <div className="detail">
            <span>15 April , 2022</span>
            <span>الاقتصادية</span>
          </div>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores.</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ipsa in adipisci hic, ex id exercitationem. Impedit voluptatibus quae atque.</p>
          <a href="#">عرض </a>
        </div>
      </SwiperSlide>

      <SwiperSlide style={{width:'300px'}}>
        <div className="swiperCard">
          <div className="img">
        <img src={slide2} alt="" />
          </div>
          <div className="detail">
            <span>15 April , 2022</span>
            <span>الاقتصادية</span>
          </div>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores.</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ipsa in adipisci hic, ex id exercitationem. Impedit voluptatibus quae atque.</p>
          <a href="#">عرض </a>
        </div>
      </SwiperSlide>

      <SwiperSlide style={{width:'300px'}}>
        <div className="swiperCard">
          <div className="img">
        <img src={slide3} alt="" />
          </div>
          <div className="detail">
            <span>15 April , 2022</span>
            <span>الاقتصادية</span>
          </div>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores.</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ipsa in adipisci hic, ex id exercitationem. Impedit voluptatibus quae atque.</p>
          <a href="#">عرض </a>
        </div>
      </SwiperSlide>

      <SwiperSlide style={{width:'300px'}}>
        <div className="swiperCard">
          <div className="img">
        <img src={slide4} alt="" />
          </div>
          <div className="detail">
            <span>15 April , 2022</span>
            <span>الاقتصادية</span>
          </div>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores.</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ipsa in adipisci hic, ex id exercitationem. Impedit voluptatibus quae atque.</p>
          <a href="#">عرض </a>
        </div>
      </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Economic