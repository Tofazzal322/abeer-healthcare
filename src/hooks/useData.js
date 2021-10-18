import { useEffect, useState } from "react"


const useData = () => {
    
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
        .then(data=> setData(data))
    }, [])
    
    return {
        data,
        setData
    }

}
export default useData;