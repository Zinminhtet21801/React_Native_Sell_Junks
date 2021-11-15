import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../../components/Button/Button";
import AppTextInput from "../../components/TextInput/AppTextInput";
import colors from "../../config/colors";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../components/Message/ErrorMessage";
import AppFormField from "../../components/Forms/AppFormField";
import SubmitButton from "../../components/Button/SubmitButton";
import AppForm from "../../components/Forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <View>
      <Image
        source={require("../../assets/logo-red.png")}
        style={{
          width: 80,
          height: 80,
          alignSelf: "center",
          marginTop: 50,
          marginBottom: 20,
        }}
      />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          type="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          icon="lock"
          placeholder="Password"
          type="password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
    </View>
  );
};

export default LoginScreen;
