import axios from "axios";
import { useEffect, useState } from "react";

export default function PostApiHook(url) {

    const [data, setData] = useState([]);
    
    useEffect(() => {
      axios.get(url)
      .then((res)=>{
          setData(res.data)
      }).catch((error)=>{
          console.log(error);
      })
    }, [])
    

  return (
    {data}
  )
}
