import { View, Text, Image } from "react-native";
import { styles } from "../../styles/mainCss";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

export default function Details({ navigation , route }) {
    const {title , price , rating , isLiked , image} = route.params.item;
    const backClick = ()=>{
        navigation.navigate("Home");
    }
  return (
    <View
      style={[styles.container, { paddingHorizontal: 20, paddingVertical: 10 }]}
    >
      {/* Top Header */}
      <View style={styles.detailsHeader}>
        <View>
          <TouchableOpacity onPress={backClick}>
            <Icon name="angle-left" size={34} color={"black"} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 18 }}>Detail</Text>
        </View>
        <View>
          <Icon name={isLiked ? "heart" : "heart-o"} size={20} color={isLiked? "red" : "black"} />
        </View>
      </View>

      {/* Image View */}
      <View style={styles.detailsImage}>
        <Image source={{uri: image}} style={{width: 200 , height: 200}} />
      </View>

      {/* Name , Price */}
      <View style={{flex: 0.1 , flexDirection: 'row' , alignItems: 'center'}}>
        <View style={{flex: 0.5}}>
            <Text style={{fontSize: 21 , fontWeight: 400}}>{title}</Text>
            <View style={{flexDirection: 'row' , alignItems: 'center' , marginTop: 7}}>
                <Icon name="star-o" color="orange" size={20}/>
                <Text style={{marginHorizontal: 3}}>{rating}</Text>
            </View>
        </View>
        <View  style={{flex: 0.5}}>
            <Text style={{textAlign: 'right' , color: "#F44648" , fontWeight: 'bold' , fontSize: 20}}>{price}</Text>
        </View>

      </View>

      {/* Details */}
      <View style={{flex: 0.1}}>
        <Text style={{fontWeight: 500 , fontSize: 16 , marginVertical: 9}}>Detail</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facere error ratione odit doloribus rem </Text>
      </View>

      {/* Quantity */}
      <View style={{flex: 0.1 , flexDirection: 'row' , alignItems: 'center'}}>
        <View style={{flexDirection: 'row' , padding: 10  , flex: 0.5}}>

        </View>
        <View style={{flex: 0.5 }}>
            <View style={{flexDirection: 'row'}}>
                <Icon name={"check-circle"} color={"green"} size={17}/>
                <Text style={{marginHorizontal: 7}}>Free Shipping</Text>
            </View>
        </View>
      </View>

      {/* Button */}
      <View style={{flex: 0.1 , alignItems: 'center'}}>
        <TouchableOpacity style={[styles.Btn , {backgroundColor: '#F44648'}]}>
            <Text style={{color: "#ffffff" , textAlign: 'center'}}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
