import { View, Text, Image } from "react-native";
import { styles } from "../../styles/mainCss";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Details({ navigation , route }) {

    const [quantity, setQuantity] = useState(1);

    const {title , price , rating , isLiked , image} = route.params.item;
    const backClick = ()=>{
        // navigation.navigate("Home");
        navigation.goBack();
    }

    const addQty = ()=>{
      setQuantity(quantity + 1);
    }

    const subQty = ()=>{
      if(quantity > 1){
        setQuantity(quantity - 1);
      }
    }

  return (
    <View
      style={[styles.container, { paddingHorizontal: 20, paddingVertical: 10 }]}
    >
      {/* Top Header */}
      <View style={styles.detailsHeader}>
        <View>
          <TouchableOpacity onPress={backClick} style={{backgroundColor: 'white' , padding: 7 , borderRadius: 8, alignItems: 'center' , justifyContent: 'center'}}>
            <Icon name="angle-left" size={34} color={"black"} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 18 }}>Detail</Text>
        </View>
        <View style={{backgroundColor: 'white' , padding: 7 , borderRadius: 8, alignItems: 'center' , justifyContent: 'center'}}>
          <Icon name={isLiked ? "heart" : "heart-o"} size={20} color={isLiked? "red" : "black"} />
        </View>
      </View>

      {/* Image View */}
      <View style={styles.detailsImage}>
        <Image source={{uri: image}} style={{width: 200 , height: 200,  resizeMode: 'contain'}} />
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
      <View style={{flex: 0.2 , flexDirection: 'row' , alignItems: 'center'}}>
        <View style={{flexDirection: 'row' , padding: 10  , flex: 0.5}}>
          <View style={styles.qtyMain}>
            <TouchableOpacity style={{flex: 0.33 , alignItems: 'center'}} onPress={subQty}><Icon name={"minus"} size={10} color={"black"}/></TouchableOpacity>
            <View style={{flex: 0.33 , alignItems: 'center'}}><Text>{quantity}</Text></View>
            <TouchableOpacity style={{flex: 0.33 , alignItems: 'center'}} onPress={addQty}><Icon name={"plus"} size={10} color={"black"}/></TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 0.5 }}>
            <View style={{flexDirection: 'row' , justifyContent: 'flex-end' , alignItems: 'center'}}>
                <Icon name={"check-circle"} color={"green"} size={17}/>
                <Text style={{marginHorizontal: 7 , fontSize: 13}}>Free Shipping</Text>
            </View>
        </View>
      </View>

      {/* Button */}
      <View style={{flex: 0.2 , alignItems: 'center' , justifyContent: 'center'}}>
        <TouchableOpacity style={[styles.Btn , {backgroundColor: '#F44648' , padding: 15 , width: 300 , fontSize: 20 , color: 'white'}]}>
            <Text style={{color: "#ffffff" , textAlign: 'center'}}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
