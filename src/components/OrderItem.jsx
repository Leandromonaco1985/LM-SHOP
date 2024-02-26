import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderItem = ({item}) => {
    const total = item.items.reduce(
        (acc, currentItem) => (acc +=(currentItem.quantity + currentItem.price)),
        0
         ) ;

  return (
    <View>
        <Text> Fecha de Compra: {new Date (item.createdAt).toLocaleString()}</Text>
      <Text> Monto total: ${total}</Text>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({})