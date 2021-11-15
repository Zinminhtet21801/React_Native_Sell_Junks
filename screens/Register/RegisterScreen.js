import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button/Button";
import AppForm from "../../components/Forms/AppForm";
import AppTextInput from "../../components/TextInput/AppTextInput";
import colors from "../../config/colors";
import * as Yup from "yup";
import SubmitButton from "../../components/Button/SubmitButton";
import AppFormField from "../../components/Forms/AppFormField";
const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(20, "Must be 20 characters or less").label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6, "Password must be at least 6 characters").label("Password"),
  confirmPassword : Yup.string().oneOf([Yup.ref("password"), null], "Passwords Must be Match").required().label("Confirm Password")
});

const RegisterScreen = () => {
  return (
    <View>
      <AppForm
        initialValues={{ name: "", email: "", password: "", confirmPassword : "" }}
        validationSchema={validationSchema}
        onSubmit={(value) => console.log(value)}
      >
        <AppFormField icon="account" placeholder="Name" type="default" name="name"  />
        <AppFormField icon="email" placeholder="Email" type="email-address" name="email" />
        <AppFormField icon="lock" placeholder="Password" type="password" name="password" />
        <AppFormField icon="lock" placeholder="Password" type="password" name="confirmPassword" />
        <SubmitButton title="REGISTER" bgColor={colors.primary} />
      </AppForm>
    </View>
  );
};

export default RegisterScreen;
