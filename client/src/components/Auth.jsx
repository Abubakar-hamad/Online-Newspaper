import React from 'react'
import { useState } from 'react'
import axios from 'axios' ;
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import Spinner from './Spinner/Spinner';




const Auth = ({setForm ,setUserData }) => {

    const [register , setRegister] = useState(false)
    const [formData, setFormData] = useState({
      username:'',
      email:'',
      password:'',
    })
    const [load ,  setLoad] = useState(false)
    const [error , setError] = useState('')
    const {username  , email ,  password , password1} = formData ;
    const plert = document.querySelector(".alert")
    
    if(load){
      console.log('load,,,');
    }

   //-----------------data form handle -----------------//
    const handleChange =(e)=>{
      setFormData({ ...formData, [e.target.name]:e.target.value})
    }
       

    
    //-----------------login function-----------------//
    const submitLogin = async(e)=>{
      e.preventDefault()
      if(!username  || !password ){
        plert.style.display ="block"
          plert.innerHTML = "* تأكد من ملء حميع الحقول"
          setTimeout(()=>{
           return plert.style.display ="none"
          } , 3000)
      }else{
        setLoad(true)
        
        try {
        const res = await axios.post(`/auth/login` , formData)
        console.log(res);
        if(res.data){
          setFormData({
            username:'',
            email:'',
            password:'',
            password1:''      
          })
          localStorage.setItem('d-t' , JSON.stringify({'n':res.data.userLogin.username , 'i':res.data.userLogin.img ,'d':res.data.userLogin._id , 'a':res.data.userLogin.isAdmin}))
          setUserData(JSON.parse(localStorage.getItem('d-t')))
          setLoad(false)
        }
        setForm(false)
        return res.data
      } catch (error) {
        console.log(error);
      }
    }
  }



    //-----------------register function-----------------//
    const submitRegister = async(e)=>{
      e.preventDefault()
      if(!username  || !password || !email){
        plert.style.display ="block"
          plert.innerHTML = "* تأكد من ملء حميع الحقول"
          setTimeout(()=>{
           return plert.style.display ="none"
          } , 3000)
      }

      if(password !== password1 ){
          plert.style.display ="block"
          plert.innerHTML = "* كلمة المرور غير متطابقة"
          setTimeout(()=>{
           return plert.style.display ="none"
          } , 3000)
      }else{
        setLoad(true)
        try {
          const res = await axios.post(`/auth/register` , formData)
          console.log(res);
          if(res.data){
            setFormData({
              username:'',
              email:'',
              password:'',
              password1:''
            })
            localStorage.setItem('d-t' , JSON.stringify({'n':res.data.userReg.username , 'i':res.data.userReg.img ,'d':res.data.userReg._id }))
            setUserData(JSON.parse(localStorage.getItem('d-t')))
            setLoad(false)
          }
          setForm(false)
          return res.data
        } catch (error) {
          console.log(error);
        }
      }
      

    }



    return (
    <div>
         <div className="authForm">
          <form action="">
            <span className='closeForm' onClick={()=>setForm(false)} >X</span>
            <h4 className='headtitle'>{register  ? "انشاء حساب":"دخول" }</h4>
            <input onChange={handleChange}  placeholder='اسم المستخدم' type="text" value={formData.username} name="username" id="" />
            {register && <input onChange={handleChange} placeholder='الايميل'  type="text" value={formData.email} name="email" id="" />}
            <input onChange={handleChange} placeholder='كلمة المرور' type="text" value={formData.password} name="password" id="" />
            {register && <input onChange={handleChange} placeholder='أعد كلمة المرور' type="text" value={formData.password1} name="password1" id="" />}
            <p className='alert' ></p>
            
            {load ? <Spinner/> : register ? <button onClick={submitRegister} className='btn'>تسجيل</button> :<button onClick={submitLogin} className='btn'>دخول</button> }
            <p onClick={()=>setRegister((x)=>!x)}>{register ?  "لدي حساب..! دخول" : "!ليس لديك حساب..؟ انشاء حساب جديد" }</p>
            
          </form>
      </div>
    </div>
  )
}

export default Auth