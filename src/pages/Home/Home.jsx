import React from 'react'
import Writer from '../../components/Writer/Writer'
import './home.css'
import slide1 from '../../assets/img/slide1.jpg'
import slide2 from '../../assets/img/slide2.jpg'
import slide3 from '../../assets/img/slide3.jpg'
import slide4 from '../../assets/img/slide4.jpg'

import logo from "../../assets/img/log.png";
import homeImg from "../../assets/img/home.jpg"

import Letest from '../../components/Letest';
import MostRead from '../../components/MostRead';
import Important from '../../components/important';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { A11y, EffectCoverflow, Navigation, Pagination   } from "swiper";



const Home = () => {
  return (
        <>
                <div className="container">

                <div className="header">
                    <div className="logo">
                    <div className="bgShape"></div>
                    <img src={logo} alt="Logo" />
                </div>
                <div className="account">
                    <h3>login</h3>
                </div>   
                </div>
                </div>
            <section id='home'>
    
            <div className="container">
                
                <div  className="content">
                    <div 
                    data-aos="fade-left" 
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="left">
                        <p className='we'  >نحن هنا</p>
                        <br />
                        <p data-aos="fade-left" className="writer"><Writer />_</p>                     
                    </div>
                    <div
                    data-aos="zoom-in" 
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    className="right">
                        <img src={homeImg} alt="" />
                    </div>
                </div>
            </div>
            </section>
            
            
            <section id="homeContent">
                <div className="container">
           

                    <h3  className='headtitle'>الأخبار</h3>
                    <div className="homeNews">
                        <Important/>
                        <Letest/>
                        <MostRead />
                    </div>
                </div>
            </section>

          <div className="container">

          
            <Swiper
          data-aos="fade-up"
          data-aos-delay="200"
          modules={[EffectCoverflow, Pagination , Navigation , A11y]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          navigation
             EffectCoverflow={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1, 

            slideShadows: true,
          }}
        // 
    //     modules={[Navigation, Pagination, A11y , EffectCoverflow]}
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   navigation
    //   pagination={{ clickable: true }}
    // //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
      
    >

            <SwiperSlide style={{width:'300px'}}>
                <img style={{width:'100% ', height:"400px" }} src={slide1} alt="" />
            </SwiperSlide>


            <SwiperSlide style={{width:'300px'}}>
                <img style={{width:'100% ', height:"400px" }} src={slide2} alt="" />
            </SwiperSlide>


            <SwiperSlide style={{width:'300px'}}>
                <img style={{width:'100% ', height:"400px" }} src={slide3} alt="" />
            </SwiperSlide>

            <SwiperSlide style={{width:'300px'}}>
                <img style={{width:'100% ', height:"400px" }} src={slide4} alt="" />
            </SwiperSlide> 


        </Swiper>
        </div>
           
        </>
  )
}

export default Home