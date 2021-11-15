import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Icon = ({ name, size = 40, backgroundColor = "#000", iconColor="#fff" }) => {
    return (
        <View style={{ ...styles.container, width : size, height : size, borderRadius : size / 2, backgroundColor }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
        </View>
    )
}

const styles= StyleSheet.create({
    container : {
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "blue"
    }
})

export default Icon
