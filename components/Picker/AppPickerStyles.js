import { Platform, StyleSheet } from "react-native";
import colors from "../../config/colors";
export default StyleSheet.create({
    container : {
        backgroundColor : colors.light,
        borderRadius : 25,
        flexDirection : "row",
        width : "100%",
        padding : 15,
        marginVertical : 10,
        alignItems : "center",
    },
    icon : {
        margin : 10
    },
    text : {
        flex : 1,
        color : colors.medium
    }
})