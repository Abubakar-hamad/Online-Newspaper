import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Important = ({news}) => {

  const [primary  ,setPrimary] = useState('')
  useEffect(()=>{
    setPrimary(news[0])
  },[news])
  let idOfPrimmary = primary?._id
  let secondery = news.filter(items => items._id !== idOfPrimmary) ;
  const handleClick = (id)=>{
    
    const item = news.find(item => item._id === id)
    setPrimary(item)
    
  }
  const navigate = useNavigate()

  return (
 
    
    <div className='split' >
      <h2>العالم العربي</h2>
        <div className='arbicWorld' 
            data-aos="fade-left" 
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              {primary && 
              <>
                
                    <div  onClick={()=>navigate(`/news/${primary._id}`)}  key={primary._id} className="primary">
                      <div className="img">
                        <img src={primary.img} alt="img" />
                      </div>
                      <span>{`${primary.updatedAt.slice(0 , 10)} | ${primary.updatedAt.slice(11, 16)}`}</span>
                      <h2> {primary.title} </h2>
                      <p>{primary.text.slice(0 , 100)} ...</p>
                      <a href=''>عرض</a>
                    </div>
              
              </>
              }

           

  
            <div className="secondery">
            {secondery &&
              
              secondery.map(item =>(

              <div onClick={()=>handleClick(item._id)} key={item._id} data-aos="zoom-in"
              data-aos-duration='2000'
              className="img">
                <img src={item.img} alt="img2" />
              </div>
              ))


            } 
            </div>
        </div>
    </div>
  
  )
}

export default Important