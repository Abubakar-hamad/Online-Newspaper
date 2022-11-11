import React from 'react'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Home from './pages/Home'
import './assets/style/style.css'
import './assets/style/media.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Details from './pages/Details';
import News from './pages/News';
import Footer from './components/Footer';
import Header from './components/Header';
import File from './components/File';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import useFetch from './hooks/useFetch';
import Profile from './pages/Profile';
import Admin from './components/Admin';
AOS.init();



const App = () => {  

  const [userData , setUserData] =useState('')
  console.log(userData);
  const [allNews , setAllNews]= useState('') 

  return (
    <div className='main'>
      <Router>
        <Header setUserData={setUserData}  />
        <Routes>
          <Route path='/' element={<Home setAllNews={setAllNews} />} />
          <Route path='/news/:id' element={<Details news={allNews} />} />
          <Route path='/allnews' element={<News news={allNews} setNews={setAllNews} />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
        <Footer/>
      </Router>
        
    </div>
  )
}

export default App