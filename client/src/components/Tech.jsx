import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation"
import { A11y, EffectCards , Navigation, Pagination, Scrollbar   } from "swiper";
import { useNavigate } from 'react-router-dom';

const Tech = ({news}) => {
  
  const navigate= useNavigate() 
  


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
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        pagination={{ clickable: true }} >
              {news ? 
             
              news.map(item =>(
               <SwiperSlide key={item._id} style={{width:'300px'}}>
            
                <div onClick={()=>navigate(`/news/${item._id}`)} className="swiperCards">
                    <div className="img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className='title'>
                      <h4>{item.title}</h4>
                      <a href="#">عرض </a>
                    </div>
                </div>
              
              </SwiperSlide>
              ))
             
              :
              <>
              <SwiperSlide>
                <h3>there is no item</h3>
              </SwiperSlide>
              </>
              }        
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
      pagination={{ clickable: true }}>


            {news ? 
             
             news.map(item =>(
              <SwiperSlide key={item._id} style={{width:'300px'}}>
           
               <div onClick={()=>navigate(`news/${item._id}`)} className="swiperCards">
                   <div className="img">
                     <img src={item.img} alt="" />
                   </div>
                   <div className='title'>
                     <h4>{item.title}</h4>
                     <a href="#">عرض </a>
                   </div>
               </div>
             
             </SwiperSlide>
             ))
            
             :
             <>
             <SwiperSlide>
               <h3>there is no item</h3>
             </SwiperSlide>
             </>
             }


      </Swiper>
      </div>
  </div>
    </div>
  )
}

export default Tech