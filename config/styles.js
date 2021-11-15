import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
    text : {
        fontSize : 18,
        fontFamily : Platform.OS === "android" ? "Roboto" : "Avenir",
        color : colors.dark,
        fontWeight : "500",
        width : "95%"
    },
})