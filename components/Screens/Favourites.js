import { Text } from "react-native";
import { View, TouchableOpacity, FlatList, Image } from "react-native";
import { styles } from "../../styles/mainCss";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BackButton from "../Buttons/BackButton";
import ProductCardBox from "../Cards/ProductCardBox";


export default function Favourites({navigation}) {

  const detailsClick = (item)=>{
    navigation.navigate("Details" , {item});
  }
  const [fried, setFried] = useState([
    {
      key: 0,
      title: "Chicken Lemon",
      price: "$ 12.50",
      rating: "4,4",
      isLiked: false,
      image: "https://www.pngmart.com/files/22/Chicken-Grill-PNG-Picture.png ",
    },
    {
      key: 1,
      title: "Hot Chicken",
      price: "$ 15.00",
      rating: "4,0",
      isLiked: true,
      image:
        "https://www.pngmart.com/files/22/Chicken-Grill-PNG-Transparent.png",
    },
    {
      key: 2,
      title: "Grilled Chicken",
      price: "$ 3.55",
      rating: "3,4",
      isLiked: true,
      image:
        "https://www.pngmart.com/files/22/Chicken-Grill-Transparent-PNG.png",
    },
    {
      key: 3,
      title: "Balado Chicken",
      price: "$ 4.00",
      rating: "5,0",
      isLiked: false,
      image: "https://www.pngmart.com/files/22/Chicken-Grill-PNG-HD.png",
    },
    {
      key: 4,
      title: "Chicken Fried",
      price: "$ 2.23",
      rating: "4,4",
      isLiked: false,
      image:
        "https://www.pngmart.com/files/22/Chicken-Grill-PNG-HD-Isolated.png",
    },
    {
      key: 5,
      title: "Chicken Broast",
      price: "$ 3.23",
      rating: "4,0",
      isLiked: true,
      image:
        "https://www.pngmart.com/files/22/Chicken-Grill-PNG-Isolated-HD.png",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.detailsHeader}>
        <View>
          <BackButton />
        </View>
        <View>
          <Text style={{ fontSize: 18 }}>Favourites</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 7,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name={"shopping-basket"} size={20} color={"black"} />
        </View>
      </View>
      <ScrollView style={{flex: 0.9}} showsVerticalScrollIndicator={false}>            
            <View style={styles.productsMain}>
                {fried.map((item)=>
      <TouchableOpacity onPress={()=>detailsClick(item)} style={styles.popularMain}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 0.5 }}>
        </View>
        <View style={{ flex: 0.5 }}>
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity onPress={()=>favClick(item.key)}>
            <Icon name={"heart"} size={20} color={"red"} />
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
            </View>
        </ScrollView>
    </View>
  );
}
