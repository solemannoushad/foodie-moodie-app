import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../../styles/mainCss";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../../config'
import { useEffect, useState } from "react";

export default function ProductCardBox(props) {

  const [liked, setLiked] = useState([]);

  useEffect(()=>{

    const func = async ()=>{

      let arr = [];
      const q = query(collection(db, "Liked"), where("userId", "==", global.loggedInUser));
    
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        arr.push(doc.data().productId);
      });
      setLiked(arr);
    }
    func();
  } , [])



    const navigation = useNavigation();

    const detailsClick = (item)=>{
        navigation.navigate("Details" , {item});
      }

    const {popular} = props.data;
  return (
    <FlatList
    data={popular}
    keyExtractor={(item) => item.key}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={()=>detailsClick(item)} style={styles.popularMain}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 0.5 }}>
            <Text style={{ marginRight: 5 }}>{item.rating}</Text>
            <View>
              <Icon name="star-o" size={18} color="orange" regular />
            </View>
          </View>
          <View style={{ flex: 0.5 }}>
            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity>
              <Icon name={liked.includes(item.key) ? "heart" : "heart-o"} size={20} color={liked.includes(item.key) ? "red" : "black"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{ width: 120, height: 120 ,  resizeMode: 'contain'}}
            source={{ uri: item.image }}
          />
        </View>
        <View>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            {item.title}
          </Text>
          <Text style={{ textAlign: "center" }}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    )}
  />
  )
}
