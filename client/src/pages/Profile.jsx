import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import UseFetch from '../hooks/useFetch'

function Profile() {
    const [userData , setUserData] = useState(JSON.parse(localStorage.getItem('d-t')))
    const [user  , setuser] = useState()
    const {data , loading , error}  = UseFetch('/user/me')
    const [image , setImage]=  useState('')
    const [formData , setFormData] = useState('')
    const {img} = formData
    const [viewImg , setViewImg] =  useState('')

    const handleClick = async(e)=>{
        e.preventDefault()
        if(!viewImg || viewImg === user.img){
            return console.log(123);
        }else{

            try {
                const res = await axios.put(`user/update/${user._id}` , formData)
                return res.data
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    useEffect(()=>{
        setuser(data)
        if(user){
        setViewImg(user?.img)
    }else{
        setUserData('')
    }
    } , [data])


    const setFileToBase = (file)=>{
        const reader = new FileReader  ;
        reader.readAsDataURL(file)
        reader.onloadend = ()=>{
            setViewImg(reader.result)
        }
    }

    const handleChange = (e)=>{
        const file = e.target.files[0]
        console.log(file);
        setFileToBase(file)
        setImage(file)
        setFormData({
           [e.target.name]:e.target.files[0]
        })
    }
    
  return (
    <div>
        <div className="container">
            <h3>حسابي </h3>
            <div className="profileForm">

            
                        <div style={viewImg ? {display:'block'} : {display:'none'}  } className="vewi">
                            <img src={viewImg} alt="" />
                            <span className='closeForm' onClick={()=>setViewImg('')} >X</span>
                        </div>
                <form encType="multipart/form-data"  action="put">

                    <input accept='image' name='img' onChange={handleChange} type="file" />
                    
                    
                    <div className="formInput">
                    <label htmlFor="text"> الاسم </label>
                    <input value={user ? user?.username : ''}  type="text" />
                    </div>

                    <div className="formInput">
                    <label htmlFor="text">  الايميل</label>
                    <input value={user ? user?.email : ''}  type="text" />
                    </div>

                    <div className="formInput">
                    <label htmlFor="text">  تاريخ الانضمام</label>
                    <input value={user ? user?.updatedAt?.slice(0,10) : ''}  type="text" />
                    </div>

                    <button onClick={handleClick} className='btn'>تحديث</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Profile