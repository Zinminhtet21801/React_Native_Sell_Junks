import React from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import styles from "./buttonStyle";
import colors from "../../config/colors";
const Button = ({ title, bgColor }) => {    
  return ( Platform.OS === "ios" ? (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <TouchableOpacity style={{...styles.loginScreenButton, backgroundColor : bgColor}} activeOpacity="0.8">
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
