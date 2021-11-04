import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../config/colors";
import ListItems from "./ListItems";
import styles from "./ListStyles";
function ListDetailsScreen({navigation}) {
  let customers = [];
  for (let i = 0; i < 10; i++) {
    customers.push(
      <ListItems title={"Mosh"} subtitle={"10 listings"} key={i} image={require("../../assets/mosh.jpg")} />
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
      <TouchableOpacity activeOpacity="0.8" onPress={()=> navigation.navigate("View Image")}>
        <Image
          source={require("../../assets/jacket.jpg")}
          resizeMode="cover"
          style={styles.image}
        />
        </TouchableOpacity>
        <View style={styles.product_description_container}>
          <Text style={styles.title_text}>Red jacket for sale</Text>
          <Text style={styles.price_text}>$100</Text>
        </View>
        <View style={{ width: "100%", marginVertical : 20 }}>
          {customers}
        </View>
      </ScrollView>
    </View>
  );
}


export default ListDetailsScreen;
