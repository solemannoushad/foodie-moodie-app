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

  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [popular, setPopular] = useState([]);
  const [best, setBest] = useState([]);


  const [ data , loading ] = GetDbData('Food Categories');
  const {  data: data1 , loading: loading1 } = ComplexDb('Popular Food');
  const {  data: data2 , loading: loading2 } = ComplexDb('Best Seller');

  console.log(data2);

  
  useEffect(() => {
    setCategories(data);
    setPopular(data1);
    setBest(data2);
  } , [data , data1 , data2])
  
  
  
  useEffect(()=>{
    getUser();
  } , [])

  
  
  const getUser = async ()=>{
    
    const q = query(collection(db, "users"), where("uid", "==", global.loggedInUser));
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setName(doc.data().name);
    });
  }

  
  
  return (
    <>
    {(loading || loading1 || loading2) && <Loading loading={loading}/>}
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
          <ProductCardBox data={{popular}}/>
        </View>

        {/* Best Seller Flatlist */}
        <View style={styles.flatListHeader}>
          <FlatlistsHeader title={"Best Seller"}/>
        </View>
        <View style={styles.bestSellerCard}>
            <ProductCardList data={{best}}/>
        </View>
      </ScrollView>
      <View style={{ flex: 0.1 }}>
        <Menu highlight={"Home"}/>
      </View>
    </View>
    </>
  );
}
