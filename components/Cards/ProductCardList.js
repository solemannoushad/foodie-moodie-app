import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../../styles/mainCss";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';


export default function ProductCardList(props) {

    const navigation = useNavigation();

    const detailsClick = (item)=>{
        navigation.navigate("Details" , {item});
      }

    const {popular} = props.data;
    
  return (
        popular.map((item)=>
        <TouchableOpacity onPress={()=>detailsClick(item)} key={item.key} style={styles.bestMain}>
        <View style={{flex: 0.4}}>
          <Image
            style={{ width: 90, height: 90  ,  resizeMode: 'contain'}}
            source={{ uri: item.image }}
          />
        </View>
        <View
          style={{ justifyContent: "center", flex: 0.4 }}
        >
          <Text style={{ textAlign: "left", fontWeight: "bold" }}>
            {item.title}
          </Text>
          <Text style={{ textAlign: "left" }}>{item.price}</Text>
        </View>
        <View style={{ justifyContent: "center" , alignItems: 'flex-end' , flex: 0.2 }}>
          <View>
          <Icon name={item.isLiked ? "heart" : "heart-o"} size={20} color={item.isLiked? "red" : "black"} />
          </View>
          <View style={{ flexDirection: "row" , marginVertical: 6 }}>
            <View>
              <Icon name="star-o" size={18} color="orange" />
            </View>
            <Text style={{ textAlign: "right", marginLeft: 5 }}>{item.rating}</Text>
          </View>
        </View>
      </TouchableOpacity>
      )
  )
}
