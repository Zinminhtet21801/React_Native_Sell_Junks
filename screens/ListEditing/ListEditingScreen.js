import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AppTextInput from "../../components/TextInput/AppTextInput";
import styles from "./ListEditingScreenStyles";
import AppPicker from "../../components/Picker/AppPicker";
import AppFormPicker from "../../components/Picker/AppFormPicker";
import SubmitButton from "../../components/Button/SubmitButton";
import { Formik } from "formik";
import AppForm from "../../components/Forms/AppForm";
import * as Yup from "yup";
import AppFormField from "../../components/Forms/AppFormField";
import Categories from "../../components/Category/Category";
import ImagePickerComponent from "../../components/ImagePicker/ImagePickerComponent";
import useLocation from "../../hooks/UseLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().positive().required().label("Price").min(0),
  item: Yup.string().required("Select An Item").label("Item"),
  description: Yup.string().required().label("Description"),
  images: Yup.array().min(1, "Select at least an image"),
});

const ListEditingScreen = () => {
  const [category, setCategory] = useState(Categories[0]);
  const location = useLocation()

  return (
    <AppForm
      initialValues={{
        title: "",
        price: "",
        item: category.label,
        description: "",
        images: [],
      }}
      onSubmit={(values) => console.log(location)}
      validationSchema={validationSchema}
    >
      <ImagePickerComponent name="images" imageLimitation={3} />
      <AppFormField
        type="default"
        placeholder="Title"
        name="title"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <AppFormField
        type="numeric"
        name="price"
        placeholder="Price (Number Only)"
        autoCapitalize="none"
        autoCorrect={false}
        // width={120}
      />
      {/* <AppFormPicker name="item" width="50%" items={Categories} /> */}
      <AppPicker
        items={Categories}
        // placeholder="Select Category"
        icon="view-list"
        name="item"
        selectedItem={category}
        onSelectedItem={(item) => setCategory(item)}
        withFormik={true}
      />
      <AppFormField
        type="default"
        name="description"
        placeholder="Description"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <SubmitButton title="POST" />
    </AppForm>
  );
};

export default ListEditingScreen;
