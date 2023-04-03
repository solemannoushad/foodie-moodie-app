import { Text } from "react-native";
import { View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/mainCss";
import Menu from "./Menu";
import Icon from "react-native-vector-icons/FontAwesome";

import {doc , getDocs , collection} from "firebase/firestore";
import {db} from '../../config'
import { useEffect, useState } from "react";




export default function Favourites({navigation}) {

  const [data, setData] = useState([]);
  const [fav, setFav] = useState([]);

    const fetchDataFromDb = async ()=>{

      const arr = [];
      
      const colRef = collection(db, "Liked");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach(doc => {
        if(doc.data().uid === global.loggedInUser){
          arr.push(doc.data());
        }else{
          console.log("Hello")
        }
      })

      setData(arr);
      console.log(data);

      }

      data.forEach(async (e)=>{

        const arr1 = [];
        
          const colRef = collection(db, e.productCat);
          const docsSnap = await getDocs(colRef);
          docsSnap.forEach(doc => {
            if(doc.data().key === e.productKey){
              arr1.push(doc.data());
            }
          })
          setFav(arr1);
          console.log(fav)
      })

      // useEffect(()=>{
      //   fetchDataFromDb();
      // })
      // fetchDataFromDb();



    const backClick = ()=>{
        // navigation.navigate("Home");
        navigation.goBack();
    }

  return (
    <View style={styles.container}>
        <View style={{flex: 0.9}}>
        <View style={styles.detailsHeader}>
        <View>
          <TouchableOpacity onPress={backClick} style={{backgroundColor: 'white' , padding: 7 , borderRadius: 8, alignItems: 'center' , justifyContent: 'center'}}>
            <Icon name="angle-left" size={34} color={"black"} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 18 }}>Detail</Text>
        </View>
        <View style={{backgroundColor: 'white' , padding: 7 , borderRadius: 8, alignItems: 'center' , justifyContent: 'center'}}>
          <Icon name={"heart"} size={20} color={"red"} />
        </View>
      </View>
        </View>
        <View style={{flex: 0.1}}>
            <Menu highlight={"Favourites"}/>
        </View>
    </View>
  )
}
