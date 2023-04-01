import { Alert, Image, Text, TextInput, View } from "react-native";
import { styles } from "../../styles/mainCss";
import Buttons from "../Buttons/Buttons";
import Loading from './Loading'

import {auth} from "../../config";
import {signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react"; 
import { StackActions } from "@react-navigation/native";

export default function Login({navigation}) {

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginClick = ()=>{
    // StackActions.reset({
    //   index: 0,
      // actions: navigation.navigate("Home")
      // actions: [StackActions.push({routeName: 'Details'})]
    // });
    navigation.navigate("Home");
  }

  const handleLogin = async () => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email,password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        
        navigation.navigate("Home" , {email});
      })
      .catch((error) => {
        setLoading(false);
        Alert.alert("Invalid Cradentials");
      });
      setLoading(false);
  };

  return (
    <>
    {loading &&<Loading loading={loading}/>}
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
      <View style={{ flex: 0.7, marginHorizontal: 20 }}>
        <TextInput style={styles.inputField} placeholder="E-mail" value={email} onChangeText={(email)=>setEmail(email)} />
        <TextInput secureTextEntry={true} style={styles.inputField} placeholder="Password" value={password} onChangeText={(password)=>setPassword(password)}/>
        <Text style={{ textAlign: "right", color: "black", fontSize: 12 }}>
          Forget Password?
        </Text>
        <View style={{ alignItems: "center" }}>
          <View style={{marginTop: 40}}>
            <Buttons title={"Login"} clickFunction={loginClick} width={300}/>
          </View>
          <Text style={{ textAlign: "right", color: "black", fontSize: 12 }}>
            Or login with
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', flex: 0.1}}>
        <Text >New on foodie moodie? <Text onPress={()=> navigation.navigate('Signup')} >Sign up</Text></Text>
      </View>
    </View>
    </>
  );
}
