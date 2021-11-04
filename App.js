import { StatusBar } from "expo-status-bar";
import React from "react";
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

const Stack = createNativeStackNavigator();

export default function App() {
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
      {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
      {/* <Stack.Screen name="Messages" component={MessageScreen} options={{headerShown : false}} /> */}
        <Stack.Screen name="Home">
          {(props) => (
            <CardComponent
              {...props}
              title="Red Jacket for sale!"
              image={require("./assets/jacket.jpg")}
              price="100"
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Detail" component={ListDetailsScreen} />
        <Stack.Screen name="View Image" component={ViewImageScreen} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
