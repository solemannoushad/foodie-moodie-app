import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../../styles/mainCss";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";


export default function CategoryCard(props) {

    const navigation = useNavigation();

    const catPress = (item)=>{
        navigation.navigate("Categories" , {item});
      }
    const {categories} = props.data;

  return (
    <FlatList
    data={categories}
    keyExtractor={(item) => item.key}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={()=>catPress(item)} style={styles.catBox}>
        <View>
          <Image
            source={{ uri: item.imageUrl }}
            style={{ width: 40, height: 40, marginRight: 5 }}
          />
        </View>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )}
  />
  )
}
