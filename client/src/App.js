import React from 'react'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Home from './pages/Home'
import './assets/style/style.css'
import AOS from "aos";
import "aos/dist/aos.css";

import Details from './pages/Details';
import News from './pages/News';
import Footer from './components/Footer';
import Header from './components/Header';
import File from './components/File';
import { useState } from 'react';
AOS.init();



const App = () => {  
  const [allNews , setAllNews]= useState('')
  console.log(allNews , 'data');
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home setAllNews={setAllNews} />} />
          <Route path='/news/:id' element={<Details news={allNews} />} />
          <Route path='/allnews' element={<News news={allNews} setNews={setAllNews} />} />
          <Route path='/file' element={<File />} />
        </Routes>
        <Footer/>
      </Router>
        
    </>
  )
}

export default App