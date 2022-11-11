import React, { useEffect } from 'react'
import Writer from '../components/Writer/Writer'
import homeImg from "../assets/img/home.jpg"
import Letest from '../components/Letest';
import MostRead from '../components/MostRead';
import Important from '../components/important';
import Economic from '../components/Economic'
import Tech from '../components/Tech'
import Notifications from '../components/Notifications';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';



const Home = ({setAllNews}) => {
    const {data , loading , error} = useFetch('news')

    const [news ,  setNews] = useState('')
    useEffect(()=>{
        setNews(data)
        setAllNews(data)
    },[data])

    
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
                        <Important news={[...news].filter(items=>items.category === 'arabic').reverse().splice(0,4)} />
                        <Letest news={[...news].reverse().splice(0,4)} nonScroll={'unScroling'} mostR={"آخر الأخبار"}/>
                        <MostRead news={[...news].slice(4 , 10)} mostR={"الأكثر قراءة"}/>
                    </div>
                </div>
            </section>


            <section>
                
                <Economic news={news}/>
            </section>

            <section className='hid'>
                <Notifications news={news}/>
            </section>
            <section className='hid'>
                <Tech news={news}/>
            </section>

           
        </>
  )
}

export default Home