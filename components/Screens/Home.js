import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import { styles } from "../../styles/mainCss";
import Menu from "./Menu";
import Icon from "react-native-vector-icons/FontAwesome";
import ProductCardBox from "../Cards/ProductCardBox";
import ProductCardList from "../Cards/ProductCardList";
import CategoryCard from "../Cards/CategoryCard";
import FlatlistsHeader from "../Headers/FlatlistsHeader";
import Loading from "./Loading";
import {db} from '../../config'

import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, addDoc } from "firebase/firestore"; 
import GetDbData from "../Hooks/GetDbData";
import ComplexDb from "../Hooks/ComplexDb";





export default function Home() {

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  const [categories, setCategories] = useState([]);
  const [popular, setPopular] = useState([]);

  const [cats] = GetDbData("Food Categories");
  const [pops] = ComplexDb("Popular Food");


  
  useEffect(()=>{
    getUser();
  } , [])


  useEffect(() => {
    setCategories(cats);
    setLoading(false);
  } , [cats])

  useEffect(() => {
    setPopular(pops);
    console.log(pops);
  } , [pops])



  

  
  
  const getUser = async ()=>{

    const q = query(collection(db, "users"), where("uid", "==", global.loggedInUser));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setName(doc.data().name);
    });
  }

  const favClick = async (key)=>{
    
    // await addDoc(doc(db, "Liked"), {
    //   uid: global.loggedInUser,
    //   productKkey: key,
    //   productCat: "Burger"
    // });
    console.log("fav Clicked with key=> " + key);
  }
 
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
            Hello {name}!
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
          <ProductCardBox data={{popular}} favClick={favClick}/>
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
