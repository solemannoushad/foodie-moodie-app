import { Text } from "react-native";
import { View } from "react-native";
import { styles } from "../../styles/mainCss";
import Menu from "./Menu";

export default function Profile() {
  return (
    <View style={styles.container}>
        <View style={{flex: 0.9}}>
            <Text>Profile</Text>
        </View>
        <View style={{flex: 0.1}}>
        <Menu highlight={"Profile"}/>
        </View>
    </View>
  )
}
