import axios from "axios";
import { useState } from "react";

export default function PostApiHook(url , data) {

    const {name , email , password} = data;
    
    const postData = async ()=>{
      await axios.post(url , {
        email: email ,
        name: name ,
        password: password
      })
      .then((res)=>{
          console.log(res);
      }).catch((error)=>{
          console.log(error);
      })
    }
  return (
    {postData}
  )
}
