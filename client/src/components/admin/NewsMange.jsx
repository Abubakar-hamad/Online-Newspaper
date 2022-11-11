import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import UseFetch from '../../hooks/useFetch'

const NewsMange = () => {

    const {data , loading , eror} = UseFetch('news/')
    const [news  , SetNews] = useState('')
    useEffect(()=>{
      SetNews(data)
    },[data])
    console.log(news , 'from admin');
  return (
    <div className='container newsManage'>
          <div className="profileForm">
            <form action="">
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <button className='btn' >نشر</button>
            </form>
          </div>
          <div className="landingAdmin">
            news
          </div>

          <div className="profileForm">
            <form action="">
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <button className='btn' >نشر</button>
            </form>
          </div>
          <div className="landingAdmin">
            news
          </div>
          <div className="profileForm">
            <form action="">
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <button className='btn' >نشر</button>
            </form>
          </div>
          <div className="landingAdmin">
            news
          </div>
    </div>
  )
}

export default NewsMange