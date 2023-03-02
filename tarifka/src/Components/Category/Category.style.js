import React from "react";
import { StyleSheet } from "react-native";



export default StyleSheet.create({
    contain: {
        backgroundColor: "white",
        margin: 7,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        flex: 1,
        flexDirection: "row",
    },
    image: {
        margin: 5,
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    text: {
        flex: 1,
        textAlign: "center",
        verticalAlign: "middle",

        fontSize: 22,
        fontWeight: "bold",

    },
})