import { useEffect , useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/mainCss";
import GetApiHook from '../Hooks/GetApiHook';
import PostApiHook from "../Hooks/PostApiHook";

export default function Signup({navigation}) {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signupPress = ()=>{
    const data = {
      name , email , password
    }
    console.log(data);
    const {postData} = PostApiHook("urlHere" , data);
    postData()
  }

  // const [data, setData] = useState([]);
    
  // useEffect(() => {
  //   axios.get("http://localhost:3000/api/categories/fetchcategories")
  //   .then((res)=>{
  //       setData(res.data)
  //   }).catch((error)=>{
  //       console.log(error);
  //   })
  // }, [])

  const {data , setData ,  fetchData} = GetApiHook("https://reactnative.dev/movies.json");

  useEffect(()=>{
    fetchData();
    setData(data);
  } , [])

  

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, marginTop: 30, marginHorizontal: 30 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 10 }}>
          Signup
        </Text>
      </View>
      <View style={{ flex: 0.9, marginHorizontal: 20, marginTop: 20}}>
        <Text style={styles.textLabel}>Email</Text>
        <TextInput style={styles.inputField} placeholder="E-mail" value={email} onChange={(email)=>setEmail(email)} />
        <Text style={styles.textLabel}>Full Name</Text>
        <TextInput style={styles.inputField} placeholder="Full Name" value={name} onChange={(name)=> setName(name)} />
        <Text style={styles.textLabel}>Password</Text>
        <TextInput style={styles.inputField} placeholder="Create Password" value={password} onChange={(password)=>setPassword(password)} />
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
