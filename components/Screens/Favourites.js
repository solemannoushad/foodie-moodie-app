import { Text } from "react-native";
import { View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/mainCss";
import Menu from "./Menu";
import Icon from "react-native-vector-icons/FontAwesome";


export default function Favourites() {

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
