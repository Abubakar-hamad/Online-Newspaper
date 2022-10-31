import React from "react";
import { useTypewriter , Cursor } from "react-simple-typewriter";


const Writer = ()=>{
    const [text] = useTypewriter({
        words:["لتحديثك بكل جديد" , "على مدار الساعة" , "لإعلامك بالحقيقة " , "لا مجال للإشـاعة"],
        loop:0 ,
        typeSpeed:120 ,
        deleteSpeed:50,
        delaySpeed:1500
    })
    return(
        <span >
            <span>{text}</span>
            <Cursor />
        </span>
    )
}

export default Writer