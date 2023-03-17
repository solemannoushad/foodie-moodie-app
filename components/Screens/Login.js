import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/mainCss";

export default function Login() {

    const[name , setName] = useState('');
    const[password , setPassword] = useState('');

  return (
    <View style={[styles.container, { marginTop: 35, marginHorizontal: 20 }]}>
      <View style={{ flex: 0.2 }}>
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
        <TextInput style={styles.inputField} placeholder="E-mail" value={name} />
        <TextInput style={styles.inputField} placeholder="Password" value={password} />
        <Text style={{ textAlign: "right", color: "black", fontSize: 12 }}>
          Forget Password?
        </Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.Btn,
              { backgroundColor: "#F44648", marginTop: 40, width: 300 },
            ]}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
          </TouchableOpacity>
          <Text style={{ textAlign: "right", color: "black", fontSize: 12 }}>
            Or login with
          </Text>
        </View>
      </View>
    </View>
  );
}
