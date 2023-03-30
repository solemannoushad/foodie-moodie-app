import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../../styles/mainCss";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";


export default function CategoryCard(props) {

    const navigation = useNavigation();

    const catPress = (item)=>{
        cat = [];
        if(item.title === 'Burger'){
          cat = burger;
        }else if(item.title === "Kebab"){
          cat = kebab;
        }
        else if(item.title === "Fried"){
          cat = fried;
        }
        navigation.navigate("Categories" , {item , cat});
      }

      const [burger, setBurger] = useState([
        {
          key: 0,
          title: "Zinger Burger",
          price: "$ 2.23",
          rating: '4,4',
          isLiked: false,
          image:
          "https://www.pngmart.com/files/16/Bacon-Cheese-Burger-PNG-Clipart.png",
        },
        {
          key: 1,
          title: "Grill Burger",
          price: "$ 3.23",
          rating: '4,0',
          isLiked: true,
          image:
            "https://www.pngmart.com/files/16/Bacon-Cheese-Burger-Transparent-Background.png",
        },
        {
          key: 2,
          title: "Cheese Burger",
          price: "$ 3.55",
          rating: '3,4',
          isLiked: true,
          image:
            "https://www.pngmart.com/files/16/Bacon-Cheese-Burger-Transparent-PNG.png",
        },
        {
          key: 3,
          title: "Monster Burger",
          price: "$ 4.00",
          rating: '5,0',
          isLiked: false,
          image:
            "https://www.pngmart.com/files/5/Hamburger-PNG-File.png",
        },
        {
          key: 4,
          title: "Zinger Burger",
          price: "$ 2.23",
          rating: '4,4',
          isLiked: false,
          image:
          "https://www.pngmart.com/files/1/Shack-Burger-PNG.png",
        },
        {
          key: 5,
          title: "Grill Burger",
          price: "$ 3.23",
          rating: '4,0',
          isLiked: true,
          image:
            "https://www.pngmart.com/files/16/Bacon-Cheese-Burger-Transparent-Background.png",
        },
        {
          key: 6,
          title: "Cheese Burger",
          price: "$ 3.55",
          rating: '3,4',
          isLiked: true,
          image:
            "https://www.pngmart.com/files/16/Bacon-Cheese-Burger-Transparent-PNG.png",
        },
        {
          key: 7,
          title: "Monster Burger",
          price: "$ 4.00",
          rating: '5,0',
          isLiked: false,
          image:
            "https://www.pngmart.com/files/5/Hamburger-PNG-File.png",
        },
      ]);
    
      const [fried, setFried] = useState([
        {
          key: 0,
          title: "Chicken Lemon",
          price: "$ 12.50",
          rating: '4,4',
          isLiked: false,
          image:
          "https://www.pngmart.com/files/22/Chicken-Grill-PNG-Picture.png ",
        },
        {
          key: 1,
          title: "Hot Chicken",
          price: "$ 15.00",
          rating: '4,0',
          isLiked: true,
          image:
            "https://www.pngmart.com/files/22/Chicken-Grill-PNG-Transparent.png",
        },
        {
          key: 2,
          title: "Grilled Chicken",
          price: "$ 3.55",
          rating: '3,4',
          isLiked: true,
          image:
            "https://www.pngmart.com/files/22/Chicken-Grill-Transparent-PNG.png",
        },
        {
          key: 3,
          title: "Balado Chicken",
          price: "$ 4.00",
          rating: '5,0',
          isLiked: false,
          image:
            "https://www.pngmart.com/files/22/Chicken-Grill-PNG-HD.png",
        },
        {
          key: 4,
          title: "Chicken Fried",
          price: "$ 2.23",
          rating: '4,4',
          isLiked: false,
          image:
          "https://www.pngmart.com/files/22/Chicken-Grill-PNG-HD-Isolated.png",
        },
        {
          key: 5,
          title: "Chicken Broast",
          price: "$ 3.23",
          rating: '4,0',
          isLiked: true,
          image:
            "https://www.pngmart.com/files/22/Chicken-Grill-PNG-Isolated-HD.png",
        },
      ]);
      const [kebab, setKebab] = useState([
        {
          key: 0,
          title: "Kebab Turki",
          price: "$ 12.50",
          rating: '4,4',
          isLiked: false,
          image:
          "https://www.pngmart.com/files/11/Food-Wrap-PNG-HD.png",
        },
        {
          key: 1,
          title: "Kebab Pizza",
          price: "$ 15.00",
          rating: '4,0',
          isLiked: true,
          image:
            "https://www.pngmart.com/files/11/Food-Wrap-Transparent-Background.png",
        },
        {
          key: 2,
          title: "Baccon Kebab",
          price: "$ 3.55",
          rating: '3,4',
          isLiked: true,
          image:
            "https://www.pngmart.com/files/11/Wrap-PNG-Photos.png",
        },
        {
          key: 3,
          title: "Big Beef Kebab",
          price: "$ 4.00",
          rating: '5,0',
          isLiked: false,
          image:
            "https://www.pngmart.com/files/11/Wrap-PNG-Transparent.png",
        },
        {
          key: 4,
          title: "Vege Kebab",
          price: "$ 2.23",
          rating: '4,4',
          isLiked: false,
          image:
          "https://www.pngmart.com/files/11/Wrap-PNG-Clipart.png",
        },
        {
          key: 5,
          title: "Double Kebab",
          price: "$ 3.23",
          rating: '4,0',
          isLiked: true,
          image:
            "https://www.pngmart.com/files/11/Wrap-PNG-HD.png",
        },
        {
          key: 6,
          title: "Chicken Kebab",
          price: "$ 3.55",
          rating: '3,4',
          isLiked: true,
          image:
            "https://www.pngmart.com/files/11/Food-Wrap-Transparent-Background.png",
        },
        {
          key: 7,
          title: "Bully Roll Kebab",
          price: "$ 4.00",
          rating: '5,0',
          isLiked: false,
          image:
            "https://www.pngmart.com/files/11/Wrap-PNG-Image.png",
        },
      ]);

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
            source={{ uri: item.imgUrl }}
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
