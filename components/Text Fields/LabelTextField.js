import { TextInput, Text, View } from "react-native";
import { styles } from "../../styles/mainCss";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

export default function LabelTextField(props) {
    const {placeholder , password , value , onChange , label} = props;
    const [pass, setPass] = useState(password);
    const [color, setColor] = useState("black");

    const eyeClick = ()=>{
      setPass(!pass);
      setColor(color==='black'? '#F44648' : 'black')
    }

  return (
    <>
      <Text style={styles.textLabel}>{label}</Text>
      <View style={{position: 'relative' , justifyContent: 'center'}}>
      <TextInput style={styles.inputField} secureTextEntry={pass} placeholder={placeholder} value={value} onChangeText={onChange}/>
      </View>
    </>
  );
}

LabelTextField.defaultProps = {
  placeholder: "",
  value: "",
  onChange: () => {},
  password: false,
};
