import { StyleSheet } from "react-native";


const HomeStyle = StyleSheet.create({
    container: {
        margin: 3,
        marginBottom: 20,
        flexDirection: "row",
        alignContent: "space-between",
    },
    title: {
        flex: 1,
        fontSize: 34,
        margin: 3,
        color: "#F2921D",
        fontWeight: "bold",
    },
    counter: {
        marginEnd: 10,
        fontSize: 34,
        color: "#F2921D",
        fontWeight: "bold",
        
        verticalAlign: "middle",
        
    },
})

export default HomeStyle