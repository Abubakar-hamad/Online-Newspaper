import React from 'react'
import Letest from '../components/Letest'
import MostRead from '../components/MostRead'

const News = () => {
  return (
    <div>
        <div className="container landing">
                <Letest nonScroll={'unScroling'} mostR={"جميع الأخبار"}/>
                <MostRead  mostR={"الاخيرة"}/>
        </div>
        <hr />
        <pagination>
        
        </pagination>
    </div>
  )
}

export default News