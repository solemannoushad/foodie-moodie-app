import {doc , getDocs , collection} from "firebase/firestore";
import {db} from '../../config'
import { useEffect, useState } from "react";

export default function GetDbData(dbName) {

  const [pop, setPop] = useState([]);


  useEffect(() => {
    
    let arr = [];
    let arr1 = [];

    const fetchComplex = async ()=>{
      const colRef1 = collection(db , dbName);
      const dataSnap1 = await getDocs(colRef1);
      dataSnap1.forEach(doc => {
        arr.push(doc.data());
      })

      arr.forEach(async(doc1) => {
        const colRef2 = collection(db , doc1.productCat);
        const dataSnap2 = await getDocs(colRef2);
        dataSnap2.forEach((doc2) =>{
          if(doc2.data().key === doc1.productKey){
            console.log("object")
            arr1.push(doc2.data());
          }else{
            console.log("else")
          }
        })
      })
      setPop(arr1);
    }

    fetchComplex();

  } , [])
  
  

  return (
    [pop]
  )
}
