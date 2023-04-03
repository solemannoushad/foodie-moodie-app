import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import { styles } from "../../styles/mainCss";
import Menu from "./Menu";
import Icon from "react-native-vector-icons/FontAwesome";
import ProductCardBox from "../Cards/ProductCardBox";
import ProductCardList from "../Cards/ProductCardList";
import CategoryCard from "../Cards/CategoryCard";
import FlatlistsHeader from "../Headers/FlatlistsHeader";
import GetDbData from "../Hooks/GetDbData";
import Loading from "./Loading";

export default function Home() {

  const [loading, setLoading] = useState(true);

  const [categories, setCategories] = useState([]);
  const [popular, setPopular] = useState([]);
  
  const [func , data] = GetDbData("Food Categories");
  const [func1 , data1, wait1] = GetDbData("Popular Food");
  
  useEffect( ()=>{
    func();
    setCategories(data);
  } , [data])

  useEffect( ()=>{
    func1();
    setPopular(data1);
    setLoading(!wait1);
  } , [data1])
 
  return (
    <>
    {loading && <Loading loading={loading}/>}
    <View style={styles.container}>
      <ScrollView
        style={styles.homeScrollMain}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header */}
        <View style={{ flex: 0.1 }}>
          <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: 400 }}>
            {/* Hello Soleman Noushad! */}
            Hello {global.loggedInUser}!
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
    </>
  );
}
