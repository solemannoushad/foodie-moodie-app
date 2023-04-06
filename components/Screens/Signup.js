import { useEffect , useState } from "react";
import {Text, View } from "react-native";
import { styles } from "../../styles/mainCss";
import Buttons from "../Buttons/Buttons";

import { addDoc, collection } from "firebase/firestore"; 


import {db , auth} from "../../config";
import {createUserWithEmailAndPassword } from "firebase/auth";
import Loading from "./Loading";
import { Alert } from "react-native";
import LabelTextField from "../Text Fields/LabelTextField";
import BackButton from "../Buttons/BackButton";
import { ScrollView } from "react-native";



export default function Signup({navigation}) {

  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {

    if(!(email !== "" && name !== "" && password !== "" && cpassword !== "")){
      Alert.alert("Fill out every field to continue");
      return;
    }

    if(password !== cpassword){
      Alert.alert("Password Not Matched");
      return;
    }

    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;

        addDoc(collection(db, "users"), {
          uid: user.uid,
          name: name,
          email: email,
          password: password
        });
        
        Alert.alert("Signed Up Successfully | Login to Continue");
        navigation.navigate("Login");

        
      })
      .catch((error) => {
        Alert.alert("Invalid Credentials");
      });
      setLoading(false);
  };

  const [name , setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");


  return (
    <>
    {loading && <Loading loading={loading}/>}
    <ScrollView style={styles.container}>
    <View>
      {/* {console.log(data)} */}
      <View style={{ flex: 0.1, marginTop: 30, marginHorizontal: 30, flexDirection: 'row' , alignItems: 'center', }}>
        <BackButton/>
        <Text style={{ fontWeight: "bold", fontSize: 25, marginLeft: 10 }}>
          Signup
        </Text>
      </View>
      <View style={{ flex: 0.9, marginHorizontal: 20, marginTop: 20}}>

        <LabelTextField label={"Email"} placeholder="E-mail" value={email} onChange={(email)=>setEmail(email)}/>
        <LabelTextField label={"Full Name"} placeholder="Name" value={name} onChange={(name)=>setName(name)}/>
        <LabelTextField label={"Password"} password={true} placeholder="password" value={password} onChange={(password)=>setPassword(password)}/>
        <LabelTextField label={"Confirm Password"} password={true} placeholder="Confirm Password" value={cpassword} onChange={(cpassword)=>setCpassword(cpassword)} />

        <Text style={{color: "black", fontSize: 14, marginHorizontal: 20,}}>
            I accept the <Text style={{fontWeight: 'bold'}}>Terms of Use</Text> and <Text style={{fontWeight: 'bold'}}>Privacy Policy</Text>
          </Text>
        <View style={{ alignItems: "center", paddingVertical: 30}}>

          <Buttons title={"Signup"} clickFunction={handleSignup} width={300}/>
          <Text style={{ textAlign: "right", color: "black", fontSize: 12 }}>
            Or signup with
          </Text>
        </View>
      </View>
      <View style={{marginBottom: 30 , alignItems: 'center'}}>
      <Text >Already on foodie moodie? <Text onPress={()=> navigation.navigate('Login')} >Log in</Text></Text>
      </View>
    </View>
    </ScrollView>
    </>
  );
}
