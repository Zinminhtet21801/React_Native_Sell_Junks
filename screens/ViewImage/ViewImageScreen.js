import React from "react";
import { Button, Image, StatusBar, StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.closeIcon}>
        <Entypo name="cross" size={50} color="#fff" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={50}
          color="#fff"
        />
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    // backgroundColor : colors.primary,
    position: "absolute",
    top: 20,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    // backgroundColor : colors.secondary,
    position: "absolute",
    top: 20,
    right: 30,
  },
});
