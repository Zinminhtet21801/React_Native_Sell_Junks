import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import colors from "../../config/colors";
import styles from "./AppTextInputStyles";
import defaultStyles from "../../config/styles";
const AppTextInput = ({
  icon,
  type,
  width="100%",
  dropdownIcon,
  canInput,
  ...otherProps
}) => {
  const [email, setEmail] = useState("");
  const isPassword = type.includes("password");
  return (
    <View style={[styles.container, {width : width}]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[defaultStyles.text]}
        {...otherProps}
        keyboardType={isPassword ? "default" : type}
        secureTextEntry={isPassword}
      />
      {dropdownIcon && (
        <MaterialCommunityIcons
          name={dropdownIcon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
    </View>
  );
};

export default AppTextInput;
