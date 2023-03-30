import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, FlatList} from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { styles } from "../../styles/mainCss";
import Menu from "./Menu";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Home({navigation}) {

  const detailsClick = (item)=>{
    navigation.navigate("Details" , {item});
  }

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

  const likeClicked = (item)=>{
    item.isLiked = false;
  }

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
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Food Category
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.catMain}>
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
        </View>
        {/* Popular Food Flatlist */}
        <View style={styles.flatListHeader}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Popular Food
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.popularCard}>
          <FlatList
            data={popular}
            keyExtractor={(item) => item.key}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>detailsClick(item)} style={styles.popularMain}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "row", flex: 0.5 }}>
                    <Text style={{ marginRight: 5 }}>{item.rating}</Text>
                    <View>
                      <Icon name="star-o" size={18} color="orange" regular />
                    </View>
                  </View>
                  <View style={{ flex: 0.5 }}>
                    <View style={{ alignItems: "flex-end" }}>
                      <TouchableOpacity onPress={()=>likeClicked(item)}>
                      <Icon name={item.isLiked ? "heart" : "heart-o"} size={20} color={item.isLiked? "red" : "black"} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    style={{ width: 120, height: 120 ,  resizeMode: 'contain'}}
                    source={{ uri: item.image }}
                  />
                </View>
                <View>
                  <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                    {item.title}
                  </Text>
                  <Text style={{ textAlign: "center" }}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Best Seller Flatlist */}
        <View style={styles.flatListHeader}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Best Seller
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bestSellerCard}>
{          popular.map((item)=>
            <TouchableOpacity onPress={()=>detailsClick(item)} key={item.key} style={styles.bestMain}>
            <View style={{flex: 0.4}}>
              <Image
                style={{ width: 90, height: 90  ,  resizeMode: 'contain'}}
                source={{ uri: item.image }}
              />
            </View>
            <View
              style={{ justifyContent: "center", flex: 0.4 }}
            >
              <Text style={{ textAlign: "left", fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text style={{ textAlign: "left" }}>{item.price}</Text>
            </View>
            <View style={{ justifyContent: "center" , alignItems: 'center' , flex: 0.2 }}>
              <View>
              <Icon name={item.isLiked ? "heart" : "heart-o"} size={20} color={item.isLiked? "red" : "black"} />
              </View>
              <View style={{ flexDirection: "row" , marginVertical: 6 }}>
                <View>
                  <Icon name="star-o" size={18} color="orange" />
                </View>
                <Text style={{ textAlign: "right", marginLeft: 5 }}>{item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      <View style={{ flex: 0.1 }}>
        <Menu highlight={"Home"}/>
      </View>
    </View>
  );
}
