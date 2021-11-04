import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import Button from "../../components/Button/Button";
import colors from "../../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
      blurRadius="10"
    >
      <View style={styles.image_container}>
        <Image
          source={require("../../assets/logo-red.png")}
          style={styles.tinyLogo}
        />
        <Text style={styles.image_text}>Sell What You Don't Want</Text>
      </View>
      <Button title={"LOGIN"} bgColor={colors.primary} />
      <Button title={"REGISTER"} bgColor={colors.secondary} />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  
  tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  image_container: {
    position: "absolute",
    top: 200,
    height: 100,
  },
  image_text: {
    paddingVertical : 20,
    fontSize: 25,
    fontWeight: "600",
  },
  
});
export default WelcomeScreen;
