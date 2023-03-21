import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "../../styles/mainCss";

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
                <TouchableOpacity onPress={loginPress} style={[styles.Btn , {backgroundColor: '#F44648'}]}>
                    <Text style={{color: 'white', textAlign: 'center' , fontSize: 18, fontWeight: 'bold'}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={signupPress} style={[styles.Btn , {borderColor: 'white' , borderWidth: 1}]}>
                    <Text style={{color: 'white', textAlign: 'center' , fontSize: 18, fontWeight: 'bold'}}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}
