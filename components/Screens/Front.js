import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "../../styles/mainCss";
import Buttons from "../Buttons/Buttons";


export default function Front({navigation}) {

  const loginPress = ()=>{
    navigation.navigate('Login');
}
  const signupPress = ()=>{
    navigation.navigate('Signup');
}

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backImg} source={require('../../assets/login_splash_backdrop.jpg')} resizeMode="cover">
        <View style={{flex: 0.6}}></View>
        <View style={styles.frontMain}>
            <Text style={{color: 'white' , fontWeight: 'bold' , fontStyle: 'italic' , fontSize: 30}}>Enjoy your fast food only in Foodie Moodie</Text>
            <Text style={{color: 'white' , fontSize: 18, fontWeight: 600}}>Here is the place to buy food you want</Text>
            <View style={styles.btnView}>
                <Buttons title={"Login"} clickFunction={loginPress} additionalTextStyle={{fontSize: 18, fontWeight: 'bold'}}/>
                <Buttons title={"Signup"} color={"transparent"} clickFunction={signupPress} additionalBtnStyle={{borderWidth: 1 , borderColor: 'white'}} additionalTextStyle={{fontSize: 18, fontWeight: 'bold'}}/>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}
