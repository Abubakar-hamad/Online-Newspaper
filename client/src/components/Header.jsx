import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/img/iconah.png";
import auth from  '../assets/img/auth.png' ;
import home from  '../assets/img/Homeicon.png' ;
import all from  '../assets/img/iconah.png' ;
import who from  '../assets/img/who.png' ;
import out from  '../assets/img/out.png' ;
import drop from  '../assets/img/drop.png' ;
import profile from  '../assets/img/profile.png' ;
import { useState } from 'react';
import Auth from './Auth';
import useFetch from '../hooks/useFetch';
import axios from 'axios';


const Header = () => {
  const navigate = useNavigate()
  const [form , setForm] = useState(false)
  const [userData , setUserData] = useState(JSON.parse(localStorage.getItem('d-t')))
  const signOuts =async()=>{
    try {
      const res = axios.get('auth/logout')
      if(res){
        setUserData('')
        localStorage.clear()
      }
      return res.data
    } catch (error) {
      console.log(error);
    }
    localStorage.clear()
  }

  const profileVew =()=>{
    navigate(`profile/${userData.d}`)
  }


  return (
    <div className="navBar">
     
    <div className="header">
        <div onClick={()=> navigate('/')} className="logo hid">
        <div className="bgShape"></div>
        <img  src={logo} alt="Logo" />
        </div>
    <nav>
        <NavLink className='link' to={'/'}>
          <img className='logo' src={home} alt="" />
        </NavLink>
        <NavLink className='link' to={'/allnews'}>
         الاخبار
        </NavLink>
        <NavLink className='link' to={'/a'}>
         حول
        </NavLink>
        <NavLink className='link' to={'/admin'}>
          الادارة
        </NavLink>
    </nav>
    <div className="account">
    {
      userData ?
      <div className="userData">
        <p>{userData?.n}</p>
        <img onClick={profileVew} className='profile' src={userData.i ? userData?.i : profile} alt="" />
        <img onClick={signOuts} src={out} alt="" />
      </div>
      :
      <img className='logo' onClick={()=>setForm((x)=>!x)} src={auth} alt="" />  

    }
    </div>   
    </div>


    {form &&
     <Auth setUserData={setUserData} setForm={setForm} />
    }

    </div>
  )
}

export default Header