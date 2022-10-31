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
AOS.init();
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ecnom' element={<News />} />
          <Route path='/tech' element={<News />} />
          <Route path='/a' element={<Details />} />
          <Route path='/all' element={<News />} />
        </Routes>
        <Footer/>
      </Router>
        
    </div>
  )
}

export default App