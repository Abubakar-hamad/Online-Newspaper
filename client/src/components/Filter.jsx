import React from 'react'
import { useState } from 'react'
import filt from '../assets/img/filter.png'
import close from '../assets/img/close.png'
import reload from '../assets/img/reload.png'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'



const Filter = ({setNews}) => {
    const [dataFilterd , setDataFilterd] =useState('')
    const {data , loading  ,error} = useFetch(`news${dataFilterd}`)

    useEffect(()=>{
        setNews(data)
    }, [data])
    const [form , setForm] = useState(false)
    return (
        <div className='filter'>
                <div className="img" >
                    {form ? <img onClick={()=>setForm((x)=>!x)} src={close} alt="" /> : <img onClick={()=>setForm((x)=>!x)} src={filt} alt="" />}
                </div>

                {form &&
                <div data className="category">
                <button onClick={()=> setDataFilterd('/filter?category=local')}>الحدث المحلي</button>
                <button onClick={()=> setDataFilterd('/filter?category=arabic')}>العالم العربي</button>
                <button onClick={()=> setDataFilterd('/filter?category=ecnomic')}>الاقتصادية</button>
                <button onClick={()=> setDataFilterd('/filter?category=mix')}>منوعات</button>
                <button onClick={()=> setDataFilterd('/filter?category=tech')}>تقنية و تكنولوجيا </button>
                <hr />
                
                <img  className='all' onClick={()=> setDataFilterd('')} src={reload} alt="" />
            </div>
                }
        </div>
  )
}

export default Filter