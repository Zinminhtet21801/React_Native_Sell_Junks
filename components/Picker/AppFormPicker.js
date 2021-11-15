import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Modal,
} from "react-native";
import { useFormikContext } from "formik";
import RNPickerSelect from "react-native-picker-select";
import AppPicker from "./AppPicker";
import ErrorMessage from "../Message/ErrorMessage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
import CategoryPicker from "../Category/CategoryPicker";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const AppFormPicker = ({ name, width, items }) => {
  const { setFieldTouched, handleChange, errors, touched, setFieldValue } =
    useFormikContext();
  const [selectedItem, setSelectedItem] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const onChange = (value) => {
    setFieldValue(name, value);
    setSelectedItem(value);
  };

  return (
    <>
      <View style={[styles.container, {width : width}]}>
        <RNPickerSelect
          value={selectedItem}
          onValueChange={(value) => onChange(value)}
          items={[
            { label: "Football", value: "football" },
            { label: "Baseball", value: "baseball" },
            { label: "Hockey", value: "hockey" },
          ]}
          Icon={() => <MaterialCommunityIcons name="chevron-down" size={20} />}
          style={defaultStyles.text}
          onClose={() => setFieldTouched(name)}
        />
      </View>

      <ErrorMessage
        style={{ color: "red" }}
        error={errors[name]}
        visible={touched[name]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 10,
  },
});

export default AppFormPicker;
