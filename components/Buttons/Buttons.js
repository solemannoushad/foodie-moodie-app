import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "../../styles/mainCss";


export default function Buttons(props) {
  return (
    <TouchableOpacity style={[styles.Btn , {backgroundColor: props.color ,width: props.width ? props.width : 240}]} onPress={props.clickFunction}>
        <Text style={{ color: "white", textAlign: "center" }}>{props.title}</Text>
    </TouchableOpacity>
  )
}
