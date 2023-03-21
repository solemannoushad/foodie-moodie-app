import { Text, View } from "react-native";
import { styles } from "../../styles/mainCss";

export default function Menu() {
  return (
    <View style={styles.menuMain}>
        <View style={styles.menuIcon}>
            <Text>Home</Text>
        </View>
        <View style={styles.menuIcon}>
            <Text>Fav</Text>
        </View>
        <View style={styles.menuIcon}>
            <Text>Cart</Text>
        </View>
        <View style={styles.menuIcon}>
            <Text>Prof</Text>
        </View>
    </View>
  )
}
