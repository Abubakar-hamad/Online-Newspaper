import React from 'react'
import Home from './pages/Home/Home'
import './assets/style/style.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const App = () => {
  return (
    <div>
        <Home />
    </div>
  )
}

export default App