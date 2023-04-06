import {doc , getDocs , collection} from "firebase/firestore";
import {db} from '../../config'
import { useEffect, useState } from "react";

export default function GetDbData(dbName) {

  const [data, setData] = useState([]);

  useEffect(() => {
    const arr = [];
    const fetchDataFromDb = async ()=>{
  
      const colRef = collection(db, dbName);
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach(doc => {
        arr.push(doc.data());
      })
  
      
    }
    fetchDataFromDb();
    setData(arr);
  } , [])



  return (
    [data]
  )
}