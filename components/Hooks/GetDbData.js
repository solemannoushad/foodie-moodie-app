import {doc , getDocs , collection} from "firebase/firestore";
import {db} from '../../config'
import { useState } from "react";

export default function GetDbData(dbName) {

  const [data, setData] = useState([]);
  const [wait, setWait] = useState(false);
  
  const fetchDataFromDb = async ()=>{
    
    setWait(true);
    const arr = [];
    
    const colRef = collection(db, dbName);
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {
      arr.push(doc.data());
    })

    setData(arr);
    setWait(false);

    }

  return (
    [fetchDataFromDb, data , wait]
  )
}
