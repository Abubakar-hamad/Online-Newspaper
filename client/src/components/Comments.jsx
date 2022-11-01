import React from 'react'

const Comments = () => {
  return (
    <div className='container '>
        <h2 className='headtitle comm'>آراء المتابعين</h2>
        <div className="comments">

        <div className="comment">
            <div className="commentContent">
            <div className="detail">
                <span>abubakar</span>
                <span>April 10 , 2022</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, iusto.</p>
            </div>

            <div className="commentContent">
            <div className="detail">
                <span>abubakar</span>
                <span>April 10 , 2022</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, iusto.</p>
            </div>

            <div className="commentContent">
            <div className="detail">
                <span>abubakar</span>
                <span>April 10 , 2022</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, iusto.</p>
            </div>

            <div className="commentContent">
            <div className="detail">
                <span>abubakar</span>
                <span>April 10 , 2022</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, iusto.</p>
            </div>

            <div className="commentContent">
            <div className="detail">
                <span>abubakar</span>
                <span>April 10 , 2022</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, iusto.</p>
            </div>
        </div>

        
            <div className="addComm">
                <form action="">
                    <textarea placeholder='  رأيك حول الخــبر' name="" id="" cols="30" rows="10"></textarea>
                    <input type="submit" name="" id="" value="نشر" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Comments