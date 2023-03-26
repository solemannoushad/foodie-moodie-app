import { Text } from "react-native";
import { View, TouchableOpacity, FlatList, Image } from "react-native";
import { styles } from "../../styles/mainCss";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { ScrollView } from "react-native";


export default function Categories({navigation , route}) {

    const productPress = (item)=>{
        navigation.navigate("Details" , {item});
    }

    const [products, setProducts] = useState(route.params.cat);

    const backClick = ()=>{
        navigation.navigate("Home");
    }

    const {title} = route.params.item;

  return (
    <View style={[styles.container, { paddingHorizontal: 20, paddingVertical: 10 }]}>
        <View style={styles.detailsHeader}>
            <View>
                <TouchableOpacity onPress={backClick}>
                    <Icon name="angle-left" size={34} color={"black"} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ fontSize: 18 }}>{title}</Text>
            </View>
            <View>
            
            </View>
        </View>

        <ScrollView style={{flex: 0.9}} showsVerticalScrollIndicator={false}>            
            <View style={styles.productsMain}>
                {products.map((item)=>
                    <TouchableOpacity onPress={()=>productPress(item)}  key={item.key} style={styles.productCard}>
                        <View>
                            <Image style={{ width: 110, height: 110,  resizeMode: 'contain' }} source={{uri: item.image}}/>
                        </View>
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                        <View>
                            <Text>{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </ScrollView>

    </View>
  )
}
