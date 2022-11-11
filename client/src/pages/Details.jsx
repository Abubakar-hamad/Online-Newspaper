import React, { useEffect } from 'react'
import MostRead from '../components/MostRead'
import Letest from '../components/Letest'
import Comments from '../components/Comments'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useState } from 'react'
import zmin from '../assets/img/zmin.png'
import zmot from '../assets/img/zmot.png'
const Details = ({news}) => {
  const param = useParams()
  const id = param.id
  const {data , loading  , error}  = useFetch(`find/${id}`)
  const [item , setItem] = useState()
  const font = document.querySelector('.dev')
  const size =['20px' , '30px' , '35px' , '40px']
  let i = 0
  useEffect(()=>{
    setItem(data)

  } , [data])

  const goUp = ()=>{
    window.scrollTo({
      top:100 ,
      behavior:'smooth'
    })
  }

  goUp()

  const zoomIn=()=>{
        if(i < size.length){
          i ++
        }
        font.style.fontSize = size[i]
      }
      
      const zoomOut=()=>{
        if( i > 0){
          i --
        }
        font.style.fontSize = size[i]

  }
  

  return (
    <div>
        <div className="details container">
          <div className="hid">
            <MostRead  news={[...news].reverse().slice(0 , 4)} mostR={"الاخيرة"} nonScroll={'unScrolling'} />
          </div>
            {item ?
              <>
              <div className="contentDetaials">
                <div className="img">
                    <h3>{item?.title}</h3>
                    <img src={item?.img} alt="" />
                </div>
                <div className="detail">
                <span>{item?.category}</span>
                {/* {<span>{item.updatedAt.slice(0 , 10)}</span> } */}
                </div>
                <div className="zoom">
                  <img  onClick={()=>zoomOut()} src={zmot} alt="" />
                  <img  onClick={()=>zoomIn()} src={zmin} alt="" />
                </div>
                <div className="dev">
                  <p>{item?.text}</p>
                </div>
            </div>
              </>
              :
              <>
              <p>there is No news</p>
              </>
             
          } 

            <Letest news={[...news].slice(3 , 6)} mostR={"أخبار مختارة"} nonScroll={'unScrolling'}  />
        </div>
        
       <Comments  />
    </div>
  )
}

export default Details