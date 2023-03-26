import { View } from "react-native";
import { styles } from "../../styles/mainCss";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function Menu(props) {

  const navigation = useNavigation();

  const menuClick = (screen)=>{
    navigation.navigate(screen);
  }

  return (
    <View style={styles.menuMain}>
        <TouchableOpacity onPress={()=>menuClick("Home")} style={styles.menuIcon}>
          <Icon name={"home"} size={23} color={props.highlight === "Home" ? "#F44648" : "#D3D3D3"}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>menuClick("Favourites")} style={styles.menuIcon}>
          <Icon name={"heart"} size={20} color={props.highlight === "Favourites" ? "#F44648" : "#D3D3D3"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>menuClick("Cart")} style={styles.menuIcon}>
          <Icon name={"shopping-cart"} size={20} color={props.highlight === "Cart" ? "#F44648" : "#D3D3D3"}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>menuClick("Profile")} style={styles.menuIcon}>
          <Icon name={"user"} size={20} color={props.highlight === "Profile" ? "#F44648" : "#D3D3D3"} />
        </TouchableOpacity>
    </View>
  )
}
