import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import axios from 'axios' ;
import Spinner from  './Spinner/Spinner' ;


const Comments = () => {
    const param = useParams()
    const id = param.id
    const [comment , setComment ] = useState()
    const plert = document.querySelector(".alert")
    const [formData  , setFormData] = useState({
        text:'',
        newsId:id ,
    })
    const [load  ,setLoad] =useState(false)

    const {text , newsId} = formData

    
    const {data } = useFetch(`/comment/${id}`)
    // console.log(data);
    useEffect(()=>{
        setComment(data)
    } , [data])
    // console.log(comment);
    console.log(formData);
    

    const handleChange =(e)=>{
        e.preventDefault()
        setFormData({
            ...formData , [e.target.name]:e.target.value
        })
    }

    const handleClick = async(e)=>{
        e.preventDefault()
        if(!text || !newsId ){
            plert.style.display ="block"
            plert.innerHTML = "* لا يمكنك   نشر تعليق فارغ "
            setTimeout(()=>{
                return plert.style.display ="none"
            } , 3000)
        }else{
            
            setLoad(true)
            try {
                const res= await axios.post(`/comment/${id}` , formData)
                const commm  =res.data
                if(commm){
                    setFormData({
                        text:'',
                        newsId:id
                    })
                    setLoad(false)
                }
                setComment([...comment , commm])
                // window.location.reload(false)
                console.log(res.data);
                return res.data
            } catch (err) {
                console.log(err);
                setLoad(false)
            }
        }
    }

  return (
    <div className='container '>
        <h2 className='headtitle comm'>آراء المتابعين</h2>
        <div className="comments">

        <div style={comment != 0 ? {display:'block'}: {display:'none'} } className="comment">
        { comment &&
           [...comment].reverse().map((item)=>(
                
            <div key={item._id} className="commentContent">
            <div className="detail">
                <span>{item.username}</span>
                <span>{`${item.updatedAt.slice(0 , 10)} | ${item.updatedAt.slice(11, 16)}`}</span>
            </div>
            <p>{item.text}</p>
            </div>
            ))

        }
        </div>
        
      

        
            <div className="addComm">
                <form action="">
                    <textarea onChange={handleChange}  placeholder='  رأيك حول الخــبر' name="text" value={formData.text} id="" cols="30" rows="10"></textarea>
                    <p className='alert' ></p>
                    {load ? <Spinner /> :<input onClick={handleClick} type="submit" name="" id="" value="نشر" />}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Comments