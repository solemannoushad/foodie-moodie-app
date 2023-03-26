import { useEffect , useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/mainCss";
import GetApiHook from '../Hooks/GetApiHook';
import PostApiHook from "../Hooks/PostApiHook";
import Icon from "react-native-vector-icons/FontAwesome";


export default function Signup({navigation}) {

  const [name , setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const backClick = ()=>{
    navigation.goBack();
}
  
  
  const signupPress = ()=>{
    const data = {
      name , email , password
    }
    console.log(data);
    const {postData} = PostApiHook("urlHere" , data);
    postData();
  }

  const {data , setData ,  fetchData} = GetApiHook("https://reactnative.dev/movies.json");

  useEffect(()=>{
    fetchData();
    setData(data);
  } , [])

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, marginTop: 30, marginHorizontal: 30, flexDirection: 'row' , alignItems: 'center', }}>
        <TouchableOpacity onPress={backClick}>
          <Icon name="angle-left" size={34} color={"black"} />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 25, marginLeft: 10 }}>
          Signup
        </Text>
      </View>
      <View style={{ flex: 0.9, marginHorizontal: 20, marginTop: 20}}>
        <Text style={styles.textLabel}>Email</Text>
        <TextInput style={styles.inputField} placeholder="E-mail" value={email} onChangeText={(email)=>setEmail(email)}/>
        <Text style={styles.textLabel}>Full Name</Text>
        <TextInput style={styles.inputField} placeholder="Full Name" value={name} onChangeText={(name)=>setName(name)}/>
        <Text style={styles.textLabel}>Password</Text>
        <TextInput style={styles.inputField} placeholder="Create Password" value={password} onChangeText={(password)=>setPassword(password)} />
        <Text style={styles.textLabel}>Confirm Password</Text>
        <TextInput style={styles.inputField} placeholder="Confirm Password" />
        <Text style={{color: "black", fontSize: 14, marginHorizontal: 20 }}>
          I accept the <Text style={{fontWeight: 'bold'}}>Terms of Use</Text> and <Text style={{fontWeight: 'bold'}}>Privacy Policy</Text>
        </Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.Btn,
              { backgroundColor: "#F44648", marginTop: 40, width: 300 },
            ]}
            onPress={signupPress}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Create New Account</Text>
          </TouchableOpacity>
          <Text style={{ textAlign: "right", color: "black", fontSize: 12 }}>
            Or signup with
          </Text>
        </View>
      </View>
      <View style={{marginBottom: 30 , alignItems: 'center'}}>
      <Text >Already on foodie moodie? <Text onPress={()=> navigation.navigate('Login')} >Log in</Text></Text>
      </View>
    </View>
  );
}
