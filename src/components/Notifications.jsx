import React from 'react'
import accept from '../assets/img/accept.png'
const Notifications = () => {
  return (
    <div className='noti'>
        <div className="notiContent">
        <h2>  خدمة أخباري اﻹلكترونية إشترك الآن لتصلك أولا بأول</h2>
            <br />
        <input type="email" placeholder=' Enter  Your  Email . . .' />
        <div className="accept">
        <div className="hover">
        <img src={accept} alt="" />
        <button>اشــتراك</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Notifications