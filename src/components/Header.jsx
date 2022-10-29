import React from 'react'
import '../pages/Home/home.css'
import logo from "../assets/img/log.png";
const Header = () => {
  return (
    <div className="container">

    <div className="header">
        <div className="logo">
        <div className="bgShape"></div>
        <img src={logo} alt="Logo" />
    </div>
    <div className="account">
        <h3>login</h3>
    </div>   
    </div>
    </div>
  )
}

export default Header