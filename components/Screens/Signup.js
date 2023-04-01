import { useEffect , useState } from "react";
import {Text, View } from "react-native";
import { styles } from "../../styles/mainCss";
import GetApiHook from '../Hooks/GetApiHook';
import PostApiHook from "../Hooks/PostApiHook";
import Buttons from "../Buttons/Buttons";
import CheckBox from 'react-native-check-box'

import { doc, setDoc, addDoc, collection } from "firebase/firestore"; 


import {db , app , auth} from "../../config";
import { getDatabase, ref, onValue } from "firebase/database";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import Loading from "./Loading";
import { Alert } from "react-native";
import LabelTextField from "../Text Fields/LabelTextField";
import BackButton from "../Buttons/BackButton";
import { ScrollView } from "react-native";



export default function Signup({navigation}) {

  const [isChecked, setIsChecked] = useState(false);

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
  const [cpassword, setCpassword] = useState("");

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

        <CheckBox
            onClick={()=>{
              setIsChecked(!isChecked)
            }}
            isChecked={isChecked}
            checkedCheckBoxColor={"#F44648"}
            rightText={<Text style={{color: "black", fontSize: 14, marginHorizontal: 20,}}>
            I accept the <Text style={{fontWeight: 'bold'}}>Terms of Use</Text> and <Text style={{fontWeight: 'bold'}}>Privacy Policy</Text>
          </Text>}
        />
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
