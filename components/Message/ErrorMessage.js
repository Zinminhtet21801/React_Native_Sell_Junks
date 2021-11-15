import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ErrorMessage = ({ error, visible }) => {
    if(!visible || !error) return null
    return (
        <View>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    error : {
        color : "red",
        paddingHorizontal : 15
    }
})

export default ErrorMessage
