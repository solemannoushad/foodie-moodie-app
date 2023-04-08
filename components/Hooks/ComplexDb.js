import {doc , getDocs , collection} from "firebase/firestore";
import {db} from '../../config'
import { useEffect, useState } from "react";

export default function ComplexDb(collectionName) {

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

      const d = []
      let documents1 = documents.map(async(doc1) => {
        const colRef2 = collection(db , doc1.productCat);
        const dataSnap2 = await getDocs(colRef2);
        dataSnap2.forEach((doc2) =>{
          if(doc2.data().key === doc1.productKey){
            d.push(doc2.data());
          }
        })
        setData(d);
      })
    setLoading(false);
    }
    console.log(data.length)

    fetchData();

  }, [collectionName]);



  return { data, loading, error };
}