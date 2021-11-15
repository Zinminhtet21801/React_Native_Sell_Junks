import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import colors from "../../config/colors";
import styles from "./ListStyles";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItems = ({
  title,
  subtitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.customers_container}>
          {IconComponent}
          {image && (
            <Image
              source={require("../../assets/mosh.jpg")}
              style={styles.customers_image}
            />
          )}
          <View style={styles.customer_text_container}>
            <Text style={styles.customer_name} numberOfLines={1}>{title}</Text>
            {subtitle && <Text style={styles.customer_total_list} numberOfLines={2}>{subtitle}</Text>}
          </View>
          <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItems;
