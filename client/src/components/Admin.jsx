import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NewsMange from './admin/NewsMange'

const Admin = () => {
const [userData , setUserData] = useState(JSON.parse(localStorage.getItem('d-t')))
const [number , setNumber] = useState('1')
return (
    <div className='admin'>
        <div className="nav">
            <div className="head">
                <div className="img">
                <img src={userData.i} alt="" />
                </div>
                <h1>{userData.n}</h1>
            </div>
            <div className="links">
            <NavLink onClick={()=>setNumber('1')} className='admin-link'>ادارة الاخبار</NavLink>
            <NavLink onClick={()=>setNumber('2')} className='admin-link'>ادارة التعليقات</NavLink>
            <NavLink onClick={()=>setNumber('3')} className='admin-link'>ادارة المستخدمين</NavLink>
            <NavLink onClick={()=>setNumber('4')} className='admin-link'>ادارة الصور</NavLink>
            <NavLink to={'/'} className='admin-link'>عودة للموقع</NavLink>
            </div>
        </div>
    {number === '1' &&
        <div className="content">
            <NewsMange />
        </div>
    }

{number === '2' &&
        <div className="content">
        2
    <div className="content">2</div>
    <div className="content">2</div>
    </div>
        }

{number === '3' &&
    <div className="content">
       3
    <div className="content">3</div>
    <div className="content">3</div>
    </div>
        }
    </div>
  )
}

export default Admin