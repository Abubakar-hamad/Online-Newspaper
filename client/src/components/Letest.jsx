import React from 'react'
import { useNavigate } from 'react-router-dom'

const Letest = ({mostR , nonScroll  , news}) => {
  const navigate = useNavigate()
  return (
    <div className={nonScroll ? '' : 'split'}>
      <h2>{mostR}</h2>
    <div  
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    data-aos="zoom-in-up"
    div className="letest">
      
          {news && 
      
          [...news].reverse().map(item => (

          <div data-aos="fade-up" data-aos-duration="3000" onClick={()=>navigate(`/news/${item._id}`)} key={item._id} className="item">
            <div className="detail">
            <p>{item.category}</p>
            <span>{`${item.updatedAt.slice(0 , 10)} | ${item.updatedAt.slice(11, 16)}`}</span>
            </div>
            <h2 className='title' >{item.title}</h2>
            <p className='itemcontent'>{item.text.slice(0 ,100)}</p>
            <a href="#">أكمل القراءة</a>
            
          </div>
          ))

      
          }
       
    
    </div>
    </div>
  )
}

export default Letest