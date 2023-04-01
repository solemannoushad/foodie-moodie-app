import { StyleSheet } from "react-native";
import { ActivityIndicator, View, Text } from "react-native";
export default function Loading(props) {
  return (
    <>
      <View style={styles.main}></View>
      <View
        style={styles.loadingView}
      >
        <ActivityIndicator
          size={"large"}
          color={"#F44648"}
          animating={props.loading}
        />
        {/* <Text>Loading</Text> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 9999,
    width: "100%",
    height: "100%",
    opacity: 1,
  },
  loadingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 9999,
    width: "100%",
    height: "100%",
  }
});
