import React from "react";
import { View, Text } from "react-native";
import ErrorMessage from "../Message/ErrorMessage";
import AppTextInput from "../TextInput/AppTextInput";
import { useFormikContext } from "formik"
const AppFormField = ({ name,width, ...otherProps }) => {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext()
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage
        style={{ color: "red" }}
        error={errors[name]}
        visible={touched[name]}
      />
    </>
  );
};

export default AppFormField;
