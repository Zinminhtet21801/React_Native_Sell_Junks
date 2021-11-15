import { Platform, StyleSheet } from "react-native";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles"
export default StyleSheet.create({
    container : {
        backgroundColor : colors.light,
        borderRadius : 25,
        flexDirection : "row",
        // width : "100%",
        padding : 15,
        margin : 10,
        alignItems : "center"
    },
    icon : {
        margin : 10
    }
})