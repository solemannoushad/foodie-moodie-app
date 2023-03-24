import axios from "axios";
import { useState } from "react";

export default function GetApiHook(url) {

    const [data, setData] = useState([]);
    
    const fetchData = async ()=>{
      await axios.get(url)
      .then((res)=>{
          setData(res.data.movies);
      }).catch((error)=>{
          console.log(error);
      })
    }
    

  return (
    {data , setData , fetchData}
  )
}
