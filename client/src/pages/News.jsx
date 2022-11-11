import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import back from '../assets/img/back.png'
import nxt from '../assets/img/next.png'
import Filter from '../components/Filter'
import Spinner from '../components/Spinner/Spinner'


const News = ({news , setNews}) => {
  const navigate= useNavigate()
  const [currentpage , setCurrentpage] = useState(0)
  const [pageLimit , setPageLimit] = useState(4)
  const [pageNumber , setPageNumber] = useState(1)
  const next = document.getElementById('next')
   
  const goUp = ()=>{
    window.scrollTo({
      top:10 ,
      behavior:'smooth'
    })
  }

  const show =()=>{
    if(pageLimit -4 <= news.length){
      next.style.display = "block"
    }
  }

  const hide =()=>{
    if(pageLimit+ 4 >= news.length){
      next.style.display = "none"
    }
  }
  const nextPage =()=>{
    hide()
    goUp()
    setCurrentpage(currentpage + 4)
    setPageLimit(pageLimit + 4)
    setPageNumber(pageNumber + 1)
  }

 
  const prevPage = ()=>{
    show()
    goUp()
    setCurrentpage(currentpage - 4)
    setPageLimit(pageLimit - 4)
    setPageNumber(pageNumber - 1)
  }

  return (
    <div>
        <div className="container landing ">
        <div className="mostRead">
                
        {news ?
        [...news].reverse().slice(currentpage  , pageLimit).map(item =>(
          <div data-aos="fade-up"   data-aos-duration="1000" onClick={()=>navigate(`/news/${item._id}`)}  key={item._id} className="item newsLanding">
              <div className="mReadContent">
                  <div className="detail">
                      <p>{item.category}</p>
                      <span>{`${item.updatedAt.slice(0 , 10)} | ${item.updatedAt.slice(11, 16)}`}</span>
                  </div>
                  <div className="mReadTitle">
                      <h2>{item.title}</h2>
                      <p>{item.text.slice(0 ,100)}ــ .. </p>
                      <a href="">عرض</a>
                  </div>
                  
              </div>

              <div className="mReadImg">
                  <img src={item.img} alt="img" />
              </div>
          </div>

        ))
        :
      
        <Spinner/>
        
        }
                
            

        <div className="pagination">
            {currentpage === 0 ? '' :<img src={nxt} alt="back" onClick={()=>prevPage()} id='prev' />}
            <p>{pageNumber}</p>
            <img src={back} alt="next" onClick={()=>nextPage()} id='next' />
        </div>



        </div>
                <Filter setNews={setNews} />
        </div>
 

      

    </div>
  )
}

export default News