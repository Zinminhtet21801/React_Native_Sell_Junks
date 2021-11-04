import React from "react";
import { View, Text, FlatList, Platform, SafeAreaView } from "react-native";
import Screen from "../../components/Screen";
import ListItems from "../ListDetails/ListItems";
import styles from "./MessagesScreenStyle";
const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/mosh.jpg"),
  },
];

const MessageScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subtitle={item.description}
            image={item.image}
            keyId={item.id}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MessageScreen;
