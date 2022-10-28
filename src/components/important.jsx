import React from 'react'
import slide1 from '../assets/img/slide1.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'
import slide4 from '../assets/img/slide4.jpg'
const Important = () => {
  
  return (
 
    
    <div className='split' >
      <h2>العالم العربي</h2>
        <div className='arbicWorld' 
            data-aos="fade-left" 
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <div className="primary">
              <div className="img">
                <img src={slide1} alt="img" />
              </div>
              <span>april 17 , 2022</span>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, tempore?
              </h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque officia dolore quam, quo ratione quidem, nulla, aliquid beatae iusto quos ipsa laboriosam. Magnam ex quibusdam adipisci non reprehenderit. Deleniti rerum recusandae quas velit reprehenderit id dolore laudantium architecto blanditiis pariatur ducimus dignissimos, nobis atque, est eligendi tempora impedit ut temporibus.</p>
            </div>
            <div className="secondery">
              <div  
              data-aos="flip-left"
              data-aos-duration='3000'
               className="img">
                <img  src={slide2} alt="img1" />
              </div>

              <div  data-aos="zoom-in"
              data-aos-duration='2000'
              className="img">
                <img src={slide3} alt="img2" />
              </div>

              <div  data-aos="flip-right"
              data-aos-duration='3000'
               className="img">
                <img src={slide4} alt="img3" />
              </div>
            </div>

        </div>
    </div>
  
  )
}

export default Important