import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { styles } from "../../styles/mainCss";
import Menu from "./Menu";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Home() {

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
        "https://thumbs.dreamstime.com/b/big-burger-hamburger-cheeseburger-close-up-isolated-white-background-75079581.jpg",
    },
    {
      key: 1,
      title: "Grill Burger",
      price: "$ 3.23",
      rating: '4,0',
      isLiked: true,
      image:
        "https://thumbs.dreamstime.com/b/veggie-burger-isolated-white-background-healthy-black-bean-veggie-burger-white-background-work-path-included-171567596.jpg",
    },
    {
      key: 2,
      title: "Cheese Burger",
      price: "$ 3.55",
      rating: '3,4',
      isLiked: true,
      image:
        "https://media.istockphoto.com/id/1141364254/photo/healthy-vegan-burger-with-grilled-tofu-cheese-and-vegetables-on-white-background.webp?s=1024x1024&w=is&k=20&c=KlM990iyHIrEdJj4zV3eAeSy5XiNvtFY7lTAYoBYmZ4=",
    },
    {
      key: 3,
      title: "Monster Burger",
      price: "$ 4.00",
      rating: '5,0',
      isLiked: false,
      image:
        "https://www.shutterstock.com/image-photo/burger-on-white-260nw-269438906.jpg",
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
            <Icon name="sort-amount-asc" size={18} color="white" regular />
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
              <View style={styles.catBox}>
                <View>
                  <Image
                    source={{ uri: item.imgUrl }}
                    style={{ width: 40, height: 40, marginRight: 5 }}
                  />
                </View>
                <View>
                  <Text>{item.title}</Text>
                </View>
              </View>
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
              <View style={styles.popularMain}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "row", flex: 0.5 }}>
                    <Text style={{ marginRight: 5 }}>{item.rating}</Text>
                    <View>
                      <Icon name="star" size={18} color="orange" regular />
                    </View>
                  </View>
                  <View style={{ flex: 0.5 }}>
                    <View style={{ alignItems: "flex-end" }}>
                      <TouchableOpacity onPress={()=>likeClicked(item)}>
                        <Icon name="heart" size={16} color={item.isLiked? "red" : "#D3D3D3"} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    style={{ width: 120, height: 120 }}
                    source={{ uri: item.image }}
                  />
                </View>
                <View>
                  <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                    {item.title}
                  </Text>
                  <Text style={{ textAlign: "center" }}>{item.price}</Text>
                </View>
              </View>
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
          <FlatList
            data={popular}
            keyExtractor={(item) => item.key}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.bestMain}>
                <View style={{flex: 0.4}}>
                  <Image
                    style={{ width: 90, height: 90 }}
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
                  <Icon name="heart" size={16} color={item.isLiked? "red" : "#D3D3D3"} />
                  </View>
                  <View style={{ flexDirection: "row" , marginVertical: 6 }}>
                    <View>
                      <Icon name="star" size={18} color="orange" />
                    </View>
                    <Text style={{ textAlign: "right", marginLeft: 5 }}>{item.rating}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
      <View style={{ flex: 0.2 }}>
        <Menu />
      </View>
    </View>
  );
}
