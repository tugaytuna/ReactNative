import { StyleSheet, TouchableWithoutFeedback } from "react-native";

export default StyleSheet.create({
    title: {
        color: "purple",
        fontWeight: "bold",
        fontSize: 34,
        marginLeft: 10,
       
    },
    prodTitle: {
        textAlign: "center",
    },
    price: {
        color: "black",
        textAlign: "center",
    },
    search: {
        color: "black",
    },
    image: {
        width: 150,
        height: 220,
        borderRadius: 10,
        margin: 10,
        alignContent: "center",
    },
    cardTemplete: {
        backgroundColor: "#F0EEED",
        // height: 320,
        
        width: 175,
        marginBottom: 20,
        marginRight: 10,
        borderRadius: 10,
        

        alignContent: "flex-start",
        
        flex: 0.5,

    },
    allCards: {
        margin: 10,
        alignContent: "flex-start",
        
        // marginBottom: 150,
    },
    stok: {
        margin: 5,
        color: "red",
        textAlign: "center",
    }
 




});