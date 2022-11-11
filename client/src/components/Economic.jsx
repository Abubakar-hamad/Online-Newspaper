import React, { useState , useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"
import { A11y, EffectCoverflow, Navigation, Pagination   } from "swiper";
import { useNavigate } from "react-router-dom";
import useFetch from '../hooks/useFetch';


const Economic = () => {
  const navigate  = useNavigate() ;
  const {data  , loading , error} = useFetch('news/filter?category=ecnomic')
  const [news , setNews] = useState('')
  useEffect(()=>{
    setNews(data)
  },[data])

  return (
    <div className='container'>
        <h3  className='headtitle'>الاقتصادية</h3>
    <div className="ecnom">

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

     effectcoverflow={{
       
       stretch: 0,
       depth: 100,
       modifier: 1, 
       slideShadows: true,
     }}
     
    >
      {news ?
     
     [...news].reverse().map(item =>(
          <SwiperSlide  key={item._id} style={{width:'300px'}}>
          <div onClick={()=>navigate(`/news/${item._id}`)} className="swiperCard">
            <div className="img">
              <img src={item.img} alt="" />
            </div>
            <div className="detail">
              <span>{`${item.updatedAt.slice(0 , 10)} | ${item.updatedAt.slice(11, 16)}`}</span>
              <span>{item.category}</span>
            </div>
            <h4>{item.title}</h4>
            <p>{item.text.slice(0 ,70)} . . .</p>
            <a href="#">عرض </a>
          </div>
        </SwiperSlide>
        ))
      :
       <SwiperSlide>no Items</SwiperSlide>
       }

      
      </Swiper>
      </div>

    </div>
  )
}

export default Economic