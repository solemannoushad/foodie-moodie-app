import {doc , getDocs , collection} from "firebase/firestore";
import {db} from '../../config'
import { useState } from "react";

export default function GetDbData(dbName) {

  const [data, setData] = useState([]);
  const [wait, setWait] = useState(false);
  
  const fetchDataFromDb = async ()=>{
    
    setWait(true);
    const arr = [];
    const arr1 = [];
    
    const colRef = collection(db, dbName);
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach((doc)=>{
      arr.push(doc.data());
    })

      arr.forEach(async (doc)=>{
        const colRef1 = collection(db, doc.productCat);
        const docsSnap1 = await getDocs(colRef1);
        docsSnap1.forEach((doc1)=>{
          if(doc1.data().key === doc.productKey){
            arr1.push(doc1.data());
          }
        })
      })

    setData(arr1)
    setWait(false);

    }

  return (
    [fetchDataFromDb, data , wait]
  )
}
