import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RowText = (props) => {
    const {messageOne, messageTwo,containerStyles, messageOneStyles, messageTwoStyles} = props
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

export default RowText

const styles = StyleSheet.create({})