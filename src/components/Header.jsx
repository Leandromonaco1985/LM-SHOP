import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({titular}) {
  return (
    <View>
      <Text>{titular}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Header