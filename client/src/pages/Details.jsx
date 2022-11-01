import React from 'react'
import MostRead from '../components/MostRead'
import img from '../assets/img/noti.jpg'
import Letest from '../components/Letest'
import Comments from '../components/Comments'

const Details = () => {
  return (
    <div>
        <div className="details container">
            <MostRead mostR={"الاخيرة"} nonScroll={'unScrolling'} />
            <div className="contentDetaials">
                <div className="img">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, molestiae.</h3>
                    <img src={img} alt="" />
                </div>
                <div className="detail">
                <span>سياسية</span>
                <span>April 18 ,2022</span>
                </div>
                <div className="dev">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem delectus possimus sapiente eligendi, architecto placeat labore ducimus, natus nulla sunt ad magnam consequatur aliquid, pariatur laborum enim! Sit numquam placeat ea eius sed. Ipsa magnam eum quaerat obcaecati cupiditate veniam explicabo facere totam voluptatibus harum asperiores velit, debitis aliquam cumque ratione repudiandae voluptates, animi itaque. Officia, ad sint odio repellendus nemo eligendi neque eum id, amet excepturi deserunt consequuntur nihil minus expedita dolorem reiciendis quidem soluta hic consectetur pariatur corrupti error obcaecati eaque sunt. Numquam ex dolor veniam modi quidem odio expedita quisquam illum? Nam molestias veritatis vel officia!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem delectus possimus sapiente eligendi, architecto placeat labore ducimus, natus nulla sunt ad magnam consequatur aliquid, pariatur laborum enim! Sit numquam placeat ea eius sed. Ipsa magnam eum quaerat obcaecati cupiditate veniam explicabo facere totam voluptatibus harum asperiores velit, debitis aliquam cumque ratione repudiandae voluptates, animi itaque. Officia, ad sint odio repellendus nemo eligendi neque eum id, amet excepturi deserunt consequuntur nihil minus expedita dolorem reiciendis quidem soluta hic consectetur pariatur corrupti error obcaecati eaque sunt. Numquam ex dolor veniam modi quidem odio expedita quisquam illum? Nam molestias veritatis vel officia!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem delectus possimus sapiente eligendi, architecto placeat labore ducimus, natus nulla sunt ad magnam consequatur aliquid, pariatur laborum enim! Sit numquam placeat ea eius sed. Ipsa magnam eum quaerat obcaecati cupiditate veniam explicabo facere totam voluptatibus harum asperiores velit, debitis aliquam cumque ratione repudiandae voluptates, animi itaque. Officia, ad sint odio repellendus nemo eligendi neque eum id, amet excepturi deserunt consequuntur nihil minus expedita dolorem reiciendis quidem soluta hic consectetur pariatur corrupti error obcaecati eaque sunt. Numquam ex dolor veniam modi quidem odio expedita quisquam illum? Nam molestias veritatis vel officia!</p>
                </div>
            </div>

            <Letest mostR={"أخبار مرتبطة"} nonScroll={'unScrolling'}  />
        </div>
        
       <Comments />
    </div>
  )
}

export default Details