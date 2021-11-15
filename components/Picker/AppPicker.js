import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  Platform,
} from "react-native";
import colors from "../../config/colors";
import styles from "./AppPickerStyles";
import defaultStyles from "../../config/styles";
import Screen from "../Screen";
import PickerItem from "../PickerItem/PickerItem";
import Constants from "expo-constants";
import { useFormikContext } from "formik";

const AppPicker = ({
  name,
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectedItem,
  withFormik,
}) => {
  const { setFieldTouched, handleChange, errors, touched, setFieldValue } =
    withFormik && useFormikContext();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <Text style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          {icon && (
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={colors.medium}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <View
          style={{
            alignSelf: "flex-end",
            paddingTop: Constants.statusBarHeight,
          }}
        >
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setFieldValue(name, item.label);
                setModalVisible(false);
                onSelectedItem && onSelectedItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};

export default AppPicker;
