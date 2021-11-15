import React from "react";
import {
    Button,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./cardStyles"
import defaultStyles from "../../config/styles"
function CardComponent({ title, subtitle, image, price, navigation }) {
  let dummyData = [];
  for (let i = 0; i < 10; i++) {
    dummyData.push(
      <TouchableOpacity style={styles.card} key={i} onPress={()=> navigation.navigate("Detail")} activeOpacity="0.8" >
        <View style={{width : "100%", height : "100%"}}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.text_container}>
          <Text style={defaultStyles.text}>{title}</Text>
          <Text style={styles.price_text}>{subtitle}</Text>
        </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.card_container}>{dummyData}</View>
      </ScrollView>
    </SafeAreaView>
  );
}


export default CardComponent;
