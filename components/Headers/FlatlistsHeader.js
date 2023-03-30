import { View, Text, TouchableOpacity } from "react-native";


export default function FlatlistsHeader(props) {
  return (
    <>
    <View>
    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
    {props.title}
    </Text>
    </View>
    <View>
    <TouchableOpacity>
        <Text>See All</Text>
        </TouchableOpacity>
    </View>
  </>
  )
}
