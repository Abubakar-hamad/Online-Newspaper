import React from 'react'
import { useNavigate } from 'react-router-dom'


const MostRead = ({mostR , nonScroll , news}) => {
    const navigate = useNavigate()


  return (

    <div className={nonScroll ? '' : 'split'}>
      <h2  >{mostR}</h2>
        <div data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos="fade-right" 
        className="mostRead">
                
        {news &&
            [...news].reverse().map(item =>(
                <div onClick={()=>navigate(`/news/${item._id}`)}  key={item._id} className="item">
                    <div className="mReadContent">
                        <div className="detail">
                            <p>{item.category}</p>
                            <span>{`${item.updatedAt.slice(0 , 10)} | ${item.updatedAt.slice(11, 16)}`}</span>
                        </div>
                        <div className="mReadTitle">
                            <h2>{item.title}</h2>
                        </div>
                        
                    </div>

                    <div className="mReadImg">
                        <img src={item.img} alt="img" />
                    </div>
                </div>

            ))
        }
                
            

             
        </div>
    </div>
  )
}

export default MostRead