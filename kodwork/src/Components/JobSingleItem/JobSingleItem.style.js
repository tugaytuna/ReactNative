import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default StyleSheet.create({
    contain: {
        backgroundColor: "white",
        margin: 7,
        padding: 5,
        borderColor: "gray",
        borderWidth: 0.7,
        borderRadius: 5,

        
    },
    title: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,

    },
    company: {
        color: "black",
        fontSize: 14,
    },
    locationContain: {
        // backgroundColor: "#ee524e",
        marginTop: 5,
        flexDirection: "row",
        
        },
    location: {
        backgroundColor: "#ee524e",
        color: "white",
        paddingLeft: 6,
        paddingRight: 6,
        paddingVertical: 1.2,
        fontSize: 12,
        borderRadius: 7,
        fontWeight: "bold",
        
    },
    level: {
        fontSize: 12,
        textAlign: "right",
        color: "#ee524e",
        marginTop: 5,
        marginRight: 4,
        fontWeight: "bold",

        

    },

})