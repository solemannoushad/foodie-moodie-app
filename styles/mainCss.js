import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafbff'
    },
    backImg: {
        flex: 1,
    },
    Btn: {
        background: 'transparent',
        width: 240,
        padding: 14,
        borderRadius: 12,
        marginVertical: 10 
    },
    frontMain: {
        flex: 0.4,
        paddingHorizontal: 10
    },
    btnView: {
        alignItems: 'center',
        marginTop: 20
    },
    inputField: {
        backgroundColor: 'white',
        color: 'black',
        margin: 10,
        padding: 10,
    },
    textLabel: {
        marginHorizontal: 20,
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    menuMain: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        zIndex: 9999999
    },
    menuIcon: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    homeScrollMain: {
        marginTop: 30,
        marginHorizontal: 17,
        flex: 0.8
    },
    flatListHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    catMain: {
        flex: 0.1,
    },
    catBox: {
        flex: 0.5,
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "space-between"
    },
    popularMain: {
        width: 140,
        height: 200,
        backgroundColor: 'white',
        marginHorizontal: 10,
        padding: 10,
    },
    popularCard: {
        flex: 0.4,
    },
    bestMain: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        flex: 1,
        width: 300
    },
    bestSellerCard: {
        alignItems: 'center',
    },
    detailsHeader: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    detailsImage: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

  export {styles}