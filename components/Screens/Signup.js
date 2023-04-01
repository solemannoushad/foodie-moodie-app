import { useEffect , useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/mainCss";
import GetApiHook from '../Hooks/GetApiHook';
import PostApiHook from "../Hooks/PostApiHook";
import Icon from "react-native-vector-icons/FontAwesome";
import Buttons from "../Buttons/Buttons";

import { doc, setDoc, addDoc, collection } from "firebase/firestore"; 


import {db , app , auth} from "../../config";
import { getDatabase, ref, onValue } from "firebase/database";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import Loading from "./Loading";
import { Alert } from "react-native";



export default function Signup({navigation}) {

  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
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

        // navigation.navigate("Home" , {name})
        Alert.alert("Signed Up Successfully");

        
      })
      .catch((error) => {
        Alert.alert("Invalid Credentials");
      });
      setLoading(false);
  };

  useEffect(()=>{

    const db = getDatabase(app);
    const dbRef = ref(db, 'users');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
    });
    
  } , [])

  const [name , setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const backClick = ()=>{
    navigation.goBack();
  }

  
  
  const signupPress = ()=>{
    navigation.navigate("Home");
    const data = {
      name , email , password
    }
    // console.log(data);
    const {postData} = PostApiHook("urlHere" , data);
    postData();
  }

  const {data , setData ,  fetchData} = GetApiHook("https://reactnative.dev/movies.json");

  useEffect(()=>{
    fetchData();
    setData(data);
  } , [])

  return (
    <>
    {loading && <Loading loading={loading}/>}
    <View style={styles.container}>
      {/* {console.log(data)} */}
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
    </>
  );
}
