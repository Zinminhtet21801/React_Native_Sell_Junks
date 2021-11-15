import React from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import styles from "./buttonStyle";
import colors from "../../config/colors";
const Button = ({ title, bgColor, onPress }) => {    
  return ( Platform.OS === "ios" ? (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical : 10,
        padding : 15
      }}
    >
      <TouchableOpacity style={{...styles.loginScreenButton, backgroundColor : bgColor}} activeOpacity="0.8" onPress={onPress}>
        <Text style={styles.loginText}>{title}</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View>
      <Button
        title="LOGIN"
        color={colors.primary}
        style={{...styles.login_button, backgroundColor : bgColor}}
      />
    </View>
  ) )
};

export default Button;
