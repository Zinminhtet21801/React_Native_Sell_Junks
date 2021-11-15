import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Text,
  Alert,
  ScrollView,
} from "react-native";
import ErrorMessage from "../Message/ErrorMessage";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import { useFormikContext } from "formik";

const requestPermission = async () => {
  const permission = Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.LOCATION_BACKGROUND,
    Permissions.LOCATION_FOREGROUND
  );

  const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
  !result.granted &&
    alert("You need to enable permission to access the library.");
};

const selectImage = async () => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    if (!result.cancelled) {
      return result.uri;
    } else if (result.cancelled) {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

function ImagePickerComponent({ name, imageLimitation }) {
  const { setFieldValue, errors, touched } = useFormikContext();
  const [image, setImage] = useState([]);
  const [imageLength, setImageLength] = useState(0);
  const scrollView = useRef();
  useEffect(() => {
    requestPermission();
  }, []);

  const deleteAction = (item) => {
    console.log(item);
    setFieldValue(
      name,
      image.filter((value) => value.id !== item.id)
    ),
      setImage((prevImage) =>
        prevImage.filter((value) => value.id !== item.id)
      ),
      setImageLength(imageLength - 1);
  };

  const TwoButtonAlert = (title, message, item) => {
    Alert.alert(title, message, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => deleteAction(item),
      },
    ]);
  };

  return (
    <View>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        horizontal
        style={styles.container}
      >
        {image && (
          <FlatList
            style={{ flexGrow: 0 }}
            horizontal
            data={image}
            keyExtractor={(image) => image.imageName}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() =>
                  TwoButtonAlert(
                    "DELETE",
                    "Are you sure you want to delete this image?",
                    item
                  )
                }
              >
                <Image
                  source={{ uri: item.imageName }}
                  style={styles.image_list}
                  width={150}
                  height={150}
                />
              </TouchableWithoutFeedback>
            )}
          />
        )}
        {image.length !== imageLimitation && (
          <View style={styles.camera_icon_container}>
            <MaterialCommunityIcons
              name="camera"
              size={50}
              color={colors.medium}
              style={styles.camera_icon}
              onPress={() =>
                selectImage().then(
                  (value) =>
                    value &&
                    (setImage((prevImage) => [
                      ...prevImage,
                      { imageName: value, id: prevImage.length + 1 },
                    ]),
                    setFieldValue(name, [
                      ...image,
                      { imageName: value },
                    ]),
                    setImageLength(imageLength + 1))
                )
              }
            />
          </View>
        )}
      </ScrollView>
      <ErrorMessage
        style={{ color: "red" }}
        error={errors[name]}
        visible={touched[name]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  camera_icon_container: {
    backgroundColor: "#d4d4d3",
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  camera_icon: {
    padding: 50,
  },
  image_list: {
    borderRadius: 25,
    margin: 5,
  },
});

export default ImagePickerComponent;
