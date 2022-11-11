import React from 'react'
import { useState } from 'react'
import axios from 'axios'





const File = () => {
    const [img , setImg]=  useState('')
    const [viewImg , setViewImg] =  useState('')

    
    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('image' , img )
        console.log(formData);
        const data = async(x)=>{
            try {
                if(img){

                    const res = await axios.post('http://localhost:5000/img' ,x)
                    return res.data
                }
            } catch (error) {
                console.log(error);
            }
        } 
            data(formData)
       
    }

    const handleChange = (e)=>{
        const file = e.target.files[0]
        setFileToBase(file)
        setImg(file)
    }
    
    const setFileToBase = (file)=>{
        const reader = new FileReader  ;
        reader.readAsDataURL(file)
        reader.onloadend = ()=>{
        setViewImg(reader.result)
        }
    }


    console.log(img); 
    console.log(viewImg); 


return (
    <div className='container' style={{margin:"auto" }}>
       <form action="" onSubmit={handleSubmit} encType="multipart/form-data" method="post">
            <input onChange={handleChange} type="file" name="image" id="" accept='image/jpg , image/jpeg , image/png' />
            <input type="submit" value="ok add" />
       </form>

       {viewImg  ?
        <>
        <img src={viewImg} alt="" />
        </>
        :
        ''
        }

    
    </div>
  )
}

export default File