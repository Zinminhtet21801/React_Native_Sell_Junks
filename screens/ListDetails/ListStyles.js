import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
    container: {
      width: "100%",
    },
    image: {
      width: "100%",
      height: 300,
    },
    product_description_container: {
      width: "100%",
      height: 80,
      backgroundColor: colors.primary,
      paddingLeft: "3%",
      paddingRight: "3%",
      alignSelf: "center",
      paddingTop: 10,
    },
    title_text: {
      fontSize: 24,
      fontWeight: "500",
    },
    price_text: {
      fontSize: 20,
      color: colors.secondary,
      paddingTop: 10,
      fontWeight: "bold",
      lineHeight : 20
    },
    customers_container: {
      width: "100%",
      padding : 15,
      backgroundColor : colors.white,
      flexDirection: "row",
      justifyContent : "center",
      alignItems : "center"
    },
    customers_image: {
      width: 65,
      height: 65,
      borderRadius: 100,
    },
    customer_text_container: {
      flex: 1,
      paddingLeft: 5,
      justifyContent : "center"
    },
    customer_name: {
      fontWeight: "500",
      fontSize: 18,
    },
    customer_total_list: {
      color: colors.medium,
      fontSize: 13,
      paddingTop: 3,
    },
  });

  export default styles