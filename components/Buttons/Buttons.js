import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "../../styles/mainCss";


export default function Buttons(props) {

  return (
    <TouchableOpacity style={[styles.Btn , {backgroundColor: props.color ? props.color : "#F44648" ,width: props.width ? props.width : 240}, props.additionalBtnStyle ? props.additionalBtnStyle : '']} onPress={props.clickFunction}>
        <Text style={[{ color: "white", textAlign: "center" } , props.additionalTextStyle ? props.additionalTextStyle : '']}>{props.title}</Text>
    </TouchableOpacity>
  )
}
