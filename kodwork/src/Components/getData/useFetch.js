import {useState, useEffect} from 'react'
import axios from 'axios'

function useFetch(api) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)

    async function useFetchF(){
      
        axios.get(api)
        .then((res) => {
            let {data: data} = res;
            setData(data);
            setLoading(false);
        })
        .catch((err) => {setErr(err)})
    }

    useEffect(() => {
        useFetchF();
    },[])


    return {data, loading, err}
}



export default useFetch;
