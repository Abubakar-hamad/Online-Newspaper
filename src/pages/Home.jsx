import React from 'react'
import Writer from '../components/Writer/Writer'
import homeImg from "../assets/img/home.jpg"
import Letest from '../components/Letest';
import MostRead from '../components/MostRead';
import Important from '../components/important';
import Economic from '../components/Economic'
import Tech from '../components/Tech'
import Notifications from '../components/Notifications';



const Home = () => {
  return (
        <>

            
            <section id='home'>
    
                
            <div className="container">
                <div  className="content">
                    <div 
                    // data-aos="fade-left" 
                    // data-aos-offset="300"
                    // data-aos-easing="ease-in-sine"
                    className="left">
                        <p className='we'  >نحن هنا</p>
                        <br />
                        <p data-aos="fade-left" className="writer"><Writer />_</p>                     
                    </div>
                    <div
                    data-aos="zoom-in" 
                    data-aos-offset="300"
                    data-aos-easing="fade-in-left"
                    data-aos-duration="3000"
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
                        <Letest nonScroll={'unScroling'} mostR={"آخر الأخبار"}/>
                        <MostRead mostR={"الأكثر قراءة"}/>
                    </div>
                </div>
            </section>


            <section>
                <Economic/>
            </section>

            <section>
                <Notifications/>
            </section>
            <section>
                <Tech/>
            </section>

           
        </>
  )
}

export default Home