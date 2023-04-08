import { Text } from "react-native";
import { View, TouchableOpacity, FlatList, Image } from "react-native";
import { styles } from "../../styles/mainCss";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import Loading from "./Loading";
import HeaderBar from "../Headers/HeaderBar";
import GetDbData from "../Hooks/GetDbData";

import {getDocs , collection} from "firebase/firestore";
import {db} from '../../config'


export default function Categories({navigation , route}) {

  const {title} = route.params.item;
  const [products, setProducts] = useState([]);
  // const [catData , wait1] = GetDbData(title);

  const [ data, loading, error ] = GetDbData(title);

  useEffect(() => {
    setProducts(data);
  } , [data])


    const productPress = (item)=>{
        navigation.navigate("Details" , {item});
    }






  return (
    <>
    {loading && <Loading loading={loading}/>}
    <View style={[styles.container, { paddingHorizontal: 20, paddingVertical: 10 }]}>
          <HeaderBar title={title}/>

        <ScrollView style={{flex: 0.9}} showsVerticalScrollIndicator={false}>            
            <View style={styles.productsMain}>
                {products.map((item)=>
                            <TouchableOpacity key={item.key} onPress={()=>productPress(item)} style={[styles.popularMain , {margin: 7}]}>
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
            </View>
        </ScrollView>

    </View>
    </>
  )
}
