import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/mainCss";
import Buttons from "../Buttons/Buttons";

export default function Login({navigation}) {

  const loginClick = ()=>{
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.2, marginTop: 30, marginHorizontal: 30 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 10 }}>
          Welcome
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            source={require("../../assets/logo.png")}
            style={{ height: 60, width: 300, marginVertical: 30 }}
          />
        </View>
      </View>
      <View style={{ flex: 0.8, marginHorizontal: 20 }}>
        <TextInput style={styles.inputField} placeholder="E-mail" />
        <TextInput secureTextEntry={true} style={styles.inputField} placeholder="Password"/>
        <Text style={{ textAlign: "right", color: "black", fontSize: 12 }}>
          Forget Password?
        </Text>
        <View style={{ alignItems: "center" }}>
          <View style={{marginTop: 40}}>
            <Buttons title={"Login"} color={"#F44648"} clickFunction={loginClick} width={300}/>
          </View>
          <Text style={{ textAlign: "right", color: "black", fontSize: 12 }}>
            Or login with
          </Text>
        </View>
      </View>
      <View style={{marginBottom: 30 , alignItems: 'center'}}>
        <Text >New on foodie moodie? <Text onPress={()=> navigation.navigate('Signup')} >Sign up</Text></Text>
      </View>
    </View>
  );
}
