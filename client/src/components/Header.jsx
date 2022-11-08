import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/img/iconah.png";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="container">

    <div className="header">
        <div onClick={()=> navigate('/')} className="logo">
        <div className="bgShape"></div>
        <img  src={logo} alt="Logo" />
    </div>
    <nav>
        <NavLink className='link' to={'/'}>الرئيسية</NavLink>
        <NavLink className='link' to={'/allnews'}>الأخبار</NavLink>
        <NavLink className='link' to={'/a'}>سياسية</NavLink>
        <NavLink className='link' to={'/a'}>اقتصادية</NavLink>
        <NavLink className='link' to={'/a'}>منوعات</NavLink>
    </nav>
    <div className="account">
        <h3>login</h3>
    </div>   
    </div>
    </div>
  )
}

export default Header