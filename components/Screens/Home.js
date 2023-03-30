import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import { styles } from "../../styles/mainCss";
import Menu from "./Menu";
import Icon from "react-native-vector-icons/FontAwesome";
import ProductCardBox from "../Cards/ProductCardBox";
import ProductCardList from "../Cards/ProductCardList";
import CategoryCard from "../Cards/CategoryCard";
import FlatlistsHeader from "../Headers/FlatlistsHeader";

export default function Home({navigation}) {

  const [categories, setCategories] = useState([
    {
      key: 0,
      title: "Burger",
      imgUrl:
        "https://img.freepik.com/premium-vector/delicious-burger-icon-food-beverages_22052-1.jpg?w=1380",
    },
    {
      key: 1,
      title: "Kebab",
      imgUrl:
        "https://img.freepik.com/premium-vector/shawarma-chicken-wrap-paper-packaging-icon_202271-1082.jpg?w=1380",
    },
    {
      key: 2,
      title: "Fried",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/2884/2884642.png",
    },
  ]);

  const [popular, setPopular] = useState([
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
  ]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.homeScrollMain}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header */}
        <View style={{ flex: 0.1 }}>
          <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: 400 }}>
            Hello Soleman Noushad!
          </Text>
          <Text style={{ fontSize: 25, fontWeight: 700 }}>
            Choose your favourite food
          </Text>
        </View>
        {/* Search */}
        <View style={{ marginVertical: 15, flex: 0.1, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{flex: 0.95 , marginRight: 10}}>
            <TextInput
              style={{ backgroundColor: "white", color: "black", padding: 15 }}
              placeholder="Search your favourite food"
            />
          </View>
            <View style={{backgroundColor: '#F44648', padding: 7 , borderRadius: 10}}>
          <TouchableOpacity>
            {/* #F44648 */}
            <Icon name="sliders" size={18} color="white" regular />
          </TouchableOpacity>
            </View>
        </View>
        {/* Category Flatlist */}
        <View style={styles.flatListHeader}>
          <FlatlistsHeader title={"Food Category"}/>
        </View>
        <View style={styles.catMain}>
          <CategoryCard data={{categories}}/>
        </View>
        {/* Popular Food Flatlist */}
        <View style={styles.flatListHeader}>
          <FlatlistsHeader title={"Popular Food"}/>
        </View>
        <View style={styles.popularCard}>
          <ProductCardBox data={{popular}}/>
        </View>

        {/* Best Seller Flatlist */}
        <View style={styles.flatListHeader}>
          <FlatlistsHeader title={"Best Seller"}/>
        </View>
        <View style={styles.bestSellerCard}>
            <ProductCardList data={{popular}}/>
        </View>
      </ScrollView>
      <View style={{ flex: 0.1 }}>
        <Menu highlight={"Home"}/>
      </View>
    </View>
  );
}
