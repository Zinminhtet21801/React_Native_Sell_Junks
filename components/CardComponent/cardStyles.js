import { StyleSheet } from 'react-native'
import colors from "../../config/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#f8f4f4",
    },
    card_container: {
      width: "100%",
      alignItems: "center",
      marginTop: 30,
    },
    image: {
      width: "100%",
      height: "70%",
    },
    card: {
      width: "95%",
      height: 250,
      borderRadius: 15,
      // backgroundColor: colors.primary,
      backgroundColor: colors.white,
      marginBottom: 15,
      shadowOffset: { width: 1, height: 1 },
      shadowColor: "#afb5b5",
      shadowOpacity: 1,
      shadowRadius : 10,
      elevation : 20,
      overflow : "hidden"
    },
    text_container: {
      flexGrow: 1,
      width: "98%",
      alignSelf: "center",
      paddingTop: 10,
      paddingLeft: "2%",
      paddingRight: "2%",
    },
    title_text: {
      fontSize: 18,
      fontWeight: "500",
      fontFamily : Platform.OS === "android" ? "Roboto" : "Avenir"
    },
    price_text: {
      fontSize: 14,
      color: colors.secondary,
      paddingTop: 10,
      fontWeight: "bold",
      fontFamily : Platform.OS === "android" ? "Roboto" : "Avenir"
    },
  });

  export default styles