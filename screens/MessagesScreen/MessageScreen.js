import React, { useState } from "react";
import { View, Text, FlatList, Platform, SafeAreaView } from "react-native";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import ListItemSeparator from "../../components/ListItemSeparator";
import Screen from "../../components/Screen";
import ListItems from "../ListDetails/ListItems";
import styles from "./MessagesScreenStyle";
const initialMessages = [
  {
    id: 1,
    title: "MOSH",
    description: "HI, Im interested in this item.",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Zin",
    description: "Whatsup dawg",
    image: require("../../assets/mosh.jpg"),
  },
];

const MessageScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../../assets/mosh.jpg"),
            },
          ])
        }
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subtitle={item.description}
            image={item.image}
            keyId={item.id}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={(props) => <ListItemSeparator />}
      />
    </Screen>
  );
};

export default MessageScreen;
