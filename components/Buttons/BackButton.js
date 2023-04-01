import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';


export default function BackButton() {

    const navigation = useNavigation();

    const backClick = ()=>{
        navigation.goBack();
    }

  return (
    <TouchableOpacity onPress={backClick} style={{backgroundColor: 'white' , paddingHorizontal: 10 , borderRadius: 8, alignItems: 'center' , justifyContent: 'center'}}>
        <Icon name="angle-left" size={34} color={"black"} />
    </TouchableOpacity>
  )
}
