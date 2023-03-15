import { StyleSheet } from "react-native";

export default StyleSheet.create({
    contain:{
        // backgroundColor: "red",
        margin: 5,
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
        marginTop: 5,
    },
    buttons: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    }

})