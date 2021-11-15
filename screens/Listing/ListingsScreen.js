import React from "react";
import { View, Text, FlatList } from "react-native";
import CardComponent from "../../components/CardComponent/CardComponent";
import Screen from "../../components/Screen";
import ListItems from "../ListDetails/ListItems";

const listings = [
  {
    id: 1,
    title: "Red Jacket for Sale",
    price: 100,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in Great Condition",
    price: 1000,
    image: require("../../assets/couch.jpg"),
  },
];

const ListingsScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardComponent
            title={item.title}
            subtitle={`$ ${item.price}`}
            image={item.image}
            navigation={navigation}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;
