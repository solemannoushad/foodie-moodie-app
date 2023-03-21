import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/mainCss";
import PostApiHook from '../Hooks/PostApiHook';
import { useState, useEffect } from "react";
import axios from "axios";

export default function Signup({navigation}) {

  const [data, setData] = useState([]);
    
  useEffect(() => {
    axios.get("http://localhost:3000/api/categories/fetchcategories")
    .then((res)=>{
        setData(res.data)
    }).catch((error)=>{
        console.log(error);
    })
  }, [])

  // const {data} = PostApiHook("http://localhost:3000/api/categories/fetchcategories");
  // const {data} = PostApiHook("https://reactnative.dev/movies.json");
  console.log(data);
  

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, marginTop: 30, marginHorizontal: 30 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 10 }}>
          Signup
        </Text>
      </View>
      <View style={{ flex: 0.9, marginHorizontal: 20, marginTop: 20}}>
        <Text style={styles.textLabel}>Email</Text>
        <TextInput style={styles.inputField} placeholder="E-mail" />
        <Text style={styles.textLabel}>Full Name</Text>
        <TextInput style={styles.inputField} placeholder="Full Name" />
        <Text style={styles.textLabel}>Password</Text>
        <TextInput style={styles.inputField} placeholder="Create Password" />
        <Text style={styles.textLabel}>Confirm Password</Text>
        <TextInput style={styles.inputField} placeholder="Cpnfirm Password" />
        <Text style={{color: "black", fontSize: 14, marginHorizontal: 20 }}>
          I accept the <Text style={{fontWeight: 'bold'}}>Terms of Use</Text> and <Text style={{fontWeight: 'bold'}}>Privacy Policy</Text>
        </Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.Btn,
              { backgroundColor: "#F44648", marginTop: 40, width: 300 },
            ]}
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
