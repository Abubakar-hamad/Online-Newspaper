import { useEffect, useState } from 'react' ;
import axios from 'axios' ;


const UseFetch = (url) => {
    const [data  , setData] = useState([]) ;
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(false)
 

    useEffect(()=>{
        const fetchData =async()=>{
            setLoading(true)
            try {
                const res = await axios.get(url)
                setData(res.data)
            } catch (err) {
                console.log(err);
                setError(err)
            }
            setLoading(false)
        }

        fetchData()
    } ,[url])

        const reFetch = async()=>{
            setLoading(true)
            try {
                const res = await axios.get(url)
                setData(res.data)
            } catch (err) {
                console.log(err)
                setError(err)
            }
        }

        return {data , loading , error , reFetch}
}

export default UseFetch