import { TextInput, View } from "react-native";
import { styles } from "../../styles/mainCss";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

export default function TextField(props) {
    const {placeholder , password , value , onChange} = props;
    const [pass, setPass] = useState(password);
    const [color, setColor] = useState("black");

    const eyeClick = ()=>{
      setPass(!pass);
      setColor(color==='black'? '#F44648' : 'black')
    }
  return (
    <>
      <View style={{position: 'relative' , justifyContent: 'center'}}>
        <TextInput style={styles.inputField} secureTextEntry={pass} placeholder={placeholder} value={value} onChangeText={onChange}/>
        {password && 
        <Icon onPress={eyeClick} color={color} name={"eye"} style={{position: 'absolute' , right: 20}
        }/>
        }
      </View>
    </>
  )
}

TextField.defaultProps = {
    placeholder: '',
    value: '',
    onChange: ()=>{},
    password: false
  };
