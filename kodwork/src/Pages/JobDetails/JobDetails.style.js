import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    contain:{
        // backgroundColor: "red",
        margin: 5,
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    containLocation: {
        flexDirection: "row",
        
    },
    locations: {
        color: "#ee524e",
        fontWeight: "bold",
    },
    locationsName: {
        marginLeft: 2,
        fontWeight: "bold",
    },
    containLevel:{
        flexDirection: "row",
    },
    jobLevel:{
        color: "#ee524e",
        fontWeight: "bold",
    },
    jobLevelName: {
        marginLeft: 2,
        fontWeight: "bold",
    },
    jobDetailsTitle:{
        margin: 10,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    jobDetails:{
        // height: "70%",

        flex: 1,
    },
    buttons: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",

        // flex: 1,
    }

})