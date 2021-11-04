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

function CardComponent({ title, subtitle, image, price, navigation }) {
  let dummyData = [];
  for (let i = 0; i < 10; i++) {
    dummyData.push(
      <TouchableOpacity style={styles.card} key={i} onPress={()=> navigation.navigate("Detail")} activeOpacity="0.8" >
        <View>
        <Image source={image} style={styles.image} />
        <View style={styles.text_container}>
          <Text style={styles.title_text}>{title}</Text>
          <Text style={styles.price_text}>${price}</Text>
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
