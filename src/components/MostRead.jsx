import React from 'react'
import slide1 from '../assets/img/slide1.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'
import slide4 from '../assets/img/slide4.jpg'
const MostRead = ({mostR , nonScroll}) => {
    console.log(nonScroll);
  return (

    <div className={nonScroll ? '' : 'split'}>
      <h2  >{mostR}</h2>
        <div data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos="fade-right" 
        className="mostRead">
                <div data-aos="fade-right" data-aos-duration="3000" className="item">
                    <div className="mReadContent">
                        <div className="detail">
                            <p>tecnical</p>
                            <span>18 April , 2022</span>
                        </div>
                        <div className="mReadTitle">
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut?</h2>
                        </div>
                        <a href="#">أكمل القراءة</a>
                    </div>

                    <div className="mReadImg">
                        <img src={slide4} alt="img" />
                    </div>
                </div>

                <div  className="item">
                    <div className="mReadContent">
                        <div className="detail">
                            <p>tecnical</p>
                            <span>18 April , 2022</span>
                        </div>
                        <div className="mReadTitle">
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut?</h2>
                        </div>
                        <a href="#">أكمل القراءة</a>
                    </div>

                    <div className="mReadImg">
                        <img src={slide2} alt="img" />
                    </div>
                </div>

                <div  className="item">
                    <div className="mReadContent">
                        <div className="detail">
                            <p>tecnical</p>
                            <span>18 April , 2022</span>
                        </div>
                        <div className="mReadTitle">
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut?</h2>
                        </div>
                        <a href="#">أكمل القراءة</a>
                    </div>

                    <div className="mReadImg">
                        <img src={slide3} alt="img" />
                    </div>
                </div>


                <div  className="item">
                    <div className="mReadContent">
                        <div className="detail">
                            <p>tecnical</p>
                            <span>18 April , 2022</span>
                        </div>
                        <div className="mReadTitle">
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut?</h2>
                        </div>
                        <a href="#">أكمل القراءة</a>
                    </div>

                    <div className="mReadImg">
                        <img src={slide1} alt="img" />
                    </div>
                </div>

                <div  className="item">
                    <div className="mReadContent">
                        <div className="detail">
                            <p>tecnical</p>
                            <span>18 April , 2022</span>
                        </div>
                        <div className="mReadTitle">
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut?</h2>
                        </div>
                        <a href="#">أكمل القراءة</a>
                    </div>

                    <div className="mReadImg">
                        <img src={slide1} alt="img" />
                    </div>
                </div>

             
        </div>
    </div>
  )
}

export default MostRead