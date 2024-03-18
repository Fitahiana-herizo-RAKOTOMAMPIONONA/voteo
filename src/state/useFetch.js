import axios from "axios"
import { useEffect, useState } from "react"

 

 const useFetch = (url) =>{
    const [data, setData] = useState([])
    const [load,setLoad] = useState(false)
    const [erreur, setErreur] =useState()

    useEffect(()=>{
        const fetchData =async () =>{
            setLoad(true)
            try {
                const res = await axios.get(url)
                setData(res.data)
            } catch (error) {
                console.log(error);
                setErreur(error)
            }
            setLoad(false)
        }
        fetchData()
    },[url])
    return {data, load, erreur}
 }

export default useFetch;
