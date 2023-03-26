import { Text } from "react-native";
import { View } from "react-native";
import { styles } from "../../styles/mainCss";
import Menu from "./Menu";

export default function Cart() {
  return (
    <View style={styles.container}>
        <View style={{flex: 0.9}}>
            <Text>Cart</Text>
        </View>
        <View style={{flex: 0.1}}>
        <Menu highlight={"Cart"}/>
        </View>
    </View>
  )
}
