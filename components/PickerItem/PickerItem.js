import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from "./PickerItemStyles"
const PicketItem = ( { label, onPress } ) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

export default PicketItem
