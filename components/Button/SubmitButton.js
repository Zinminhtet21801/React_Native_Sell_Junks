import React from "react";
import { View, Text } from "react-native";
import { useFormikContext } from "formik"
import Button from "./Button";
import colors from "../../config/colors";
const SubmitButton = ({title}) => {
    const { handleSubmit } = useFormikContext()
  return (
    <Button title={title} bgColor={colors.primary} onPress={handleSubmit} />
  );
};

export default SubmitButton;
