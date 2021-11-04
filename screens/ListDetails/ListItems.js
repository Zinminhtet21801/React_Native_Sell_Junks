import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from "./ListStyles"
const ListItems = ({ title, subtitle, image }) => {
    return (
        <View style={styles.customers_container}>
        <Image
          source={image ? image : require("../../assets/mosh.jpg")}
          style={styles.customers_image}
        />
        <View style={styles.customer_text_container}>
          <Text style={styles.customer_name}>{title}</Text>
          <Text style={styles.customer_total_list}>{subtitle}</Text>
        </View>
      </View>
    )
}

export default ListItems
