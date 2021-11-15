import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Alert,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Platform,
  Dimensions,
  ScrollView,
  TextInput,
  Switch,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./screens/Welcome/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImage/ViewImageScreen";
import CardComponent from "./components/CardComponent/CardComponent";
import ListDetailsScreen from "./screens/ListDetails/ListDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageScreen from "./screens/MessagesScreen/MessageScreen";
import Screen from "./components/Screen";
import Icon from "./components/Icon";
import ListItems from "./screens/ListDetails/ListItems";
import AccountScreen from "./screens/Account/AccountScreen";
import ListingsScreen from "./screens/Listing/ListingsScreen";
import AppTextInput from "./components/TextInput/AppTextInput";
import AppPicker from "./components/Picker/AppPicker";
import RegisterScreen from "./screens/Register/RegisterScreen";
import ListEditingScreen from "./screens/ListEditing/ListEditingScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import ImagePickerComponent from "./components/ImagePicker/ImagePickerComponent";

const Stack = createNativeStackNavigator();

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Camera",
    value: 3,
  },
];

export default function App() {
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <CardComponent
    //   title="Red Jacket for sale!"
    //   image={require("./assets/jacket.jpg")}
    //   price="100"
    // />

    // <View style={styles.container}>
    //   <ListDetailsScreen />
    //    <CardComponent
    //   title="Red Jacket for sale!"
    //   image={require("./assets/jacket.jpg")}
    //   price="100"
    // />
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login">
          {(props) => (
            <Screen {...props}>
              <LoginScreen />
            </Screen>
          )}
        </Stack.Screen> */}

        {/* <Stack.Screen name="Image Picker" component={ImagePickerComponent} /> */}

        <Stack.Screen name="List Editing">
          {(props) => (
            <Screen {...props}>
              <ListEditingScreen />
            </Screen>
          )}
        </Stack.Screen>

        {/* <Stack.Screen name="Register">
          {(props) => (
            <Screen {...props}>
              <RegisterScreen />
            </Screen>
          )}
        </Stack.Screen> */}

        {/* <Stack.Screen name="Date Picker">
          {(props) => (
            <Screen {...props}>
              <AppPicker
                icon="apps"
                placeholder="Category"
                items={categories}
                selectedItem={category}
                onSelectedItem={(item) => setCategory(item)}
                withFormik={true}
              />
              <AppTextInput
                icon="email"
                placeholder="Email"
                type="email-address"
              />
            </Screen>
          )}
        </Stack.Screen> */}
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}

        <Stack.Screen
          name="Messages"
          component={MessageScreen}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen name="Screen">
          {(props) => (
            <Screen {...props}>
              <ListItems title="Title" subtitle="Subtitle" IconComponent={<Icon name="email" />} />
            </Screen>
          )}
        </Stack.Screen> */}

        {/* <Stack.Screen name="Account" component={AccountScreen} /> */}

        {/* <Stack.Screen name="Listings">
        {(props)=>(
          <ListingsScreen {...props} />
        )}
        </Stack.Screen> */}

        {/* <Stack.Screen name="Inputs">
          {(props) => (
            <Screen {...props}>
              <AppTextInput placeholder="Username" icon="email" keyboardType="email-address" />
            </Screen>
          )}
        </Stack.Screen> */}

        {/* <Stack.Screen name="Switch">
          {(props) => (
            <Screen {...props}>
              <Switch value={isNew} onValueChange={(newValue)=> setIsNew(newValue)} />
            </Screen>
          )}
        </Stack.Screen> */}

        {/* <Stack.Screen name="Home">
          {(props) => (
            <CardComponent
              {...props}
              title="Red Jacket for sale!"
              image={require("./assets/jacket.jpg")}
              price="100"
            />
          )}
        </Stack.Screen> */}
        <Stack.Screen name="Detail" component={ListDetailsScreen} />
        <Stack.Screen
          name="View Image"
          component={ViewImageScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
