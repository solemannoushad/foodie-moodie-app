import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BackButton from "../Buttons/BackButton";
import { styles } from "../../styles/mainCss";



export default function HeaderBar(props) {
  const {title , isLiked, icon} = props;
  return (
    <View style={styles.detailsHeader}>
    <View>
      <BackButton/>
    </View>
    <View>
      <Text style={{ fontSize: 18 }}>{title}</Text>
    </View>
    <View style={{backgroundColor: 'white' , padding: 7 , borderRadius: 8, alignItems: 'center' , justifyContent: 'center'}}>
      {icon && <Icon name={isLiked ? "heart" : "heart-o"} size={20} color={isLiked? "red" : "black"} />}
    </View>
  </View>
  )
}

HeaderBar.defaultProps = {
  title: '',
  icon: '',
  isLiked: false
};
