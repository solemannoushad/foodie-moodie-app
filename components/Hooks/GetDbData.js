import {doc , getDocs , collection} from "firebase/firestore";
import {db} from '../../config'
import { useEffect, useState } from "react";

export default function GetDbData(collectionName) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async ()=>{

      setLoading(true);
  
      const colRef = collection(db , collectionName);
      const dataSnap = await getDocs(colRef);
      
      const documents = [];
      dataSnap.forEach(doc => {
        documents.push(doc.data());
      })
      
    setData(documents);
    setLoading(false);
    }

    fetchData();

  }, [collectionName]);



  return [ data, loading, error ];
}