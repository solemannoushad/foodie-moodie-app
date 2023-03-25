import { Text, View } from "react-native";
import { styles } from "../../styles/mainCss";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Menu() {
  return (
    <View style={styles.menuMain}>
        <View style={styles.menuIcon}>
        <Icon name={"home"} size={23} color={"#F44648"} />
        </View>
        <View style={styles.menuIcon}>
        <Icon name={"heart"} size={20} color={"#D3D3D3"} />
        </View>
        <View style={styles.menuIcon}>
        <Icon name={"shopping-cart"} size={20} color={"#D3D3D3"} />
        </View>
        <View style={styles.menuIcon}>
        <Icon name={"user"} size={20} color={"#D3D3D3"} />
        </View>
    </View>
  )
}
