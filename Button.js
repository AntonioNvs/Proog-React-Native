import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

export default function Button({handler, symbol}) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => handler(symbol)}>
      <Text style={styles.text}>{symbol}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: "23%",
    height: 84,
    padding: 12,
    marginTop: 8,
    backgroundColor: "#bf7b0d",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FAFAFA"
  }
})