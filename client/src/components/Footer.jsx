import React from 'react'
import git from '../assets/img/git.png'
import whatsapp from '../assets/img/whatsapp.png'
import linked from '../assets/img/linked.png'
const Footer = () => {
  return (
    <div>
        <footer>
            <div className="container foot">
                <div className="whoWe">
                    <h2>من نحن</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, eius.</p>
                    <button> تعرّف علينا</button>
                </div>

                <div className="social">
                <h2>حساباتنا</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, eius.</p>
                    <div className="icons">
                        <img src={git} alt="" />
                        <img src={whatsapp} alt="" />
                        <img src={linked} alt="" />
                    </div>
                </div>

                <div className="connectUs hid">
                <h2> تواصل معنا</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, eius.</p>
                    <button> اتصل بنا</button>
                </div>
            </div>

            <div className="copyRights">
           <span> &copy; All rights reserved 2022</span>
           <span>created by Abubakar Hmd</span>
            </div>
        </footer>
    </div>
  )
}

export default Footer