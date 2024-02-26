import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors';

const OrderItem = ({item}) => {
    const total = item.items.reduce(
        (acc, currentItem) => (acc +=(currentItem.quantity + currentItem.price)),
        0
         ) ;

  return (
    <View style={styles.container}>
        <Text style={styles.text} > Fecha de Compra: {new Date (item.createdAt).toLocaleString()}</Text>
      <Text style={styles.text}> Monto total: ${total}</Text>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  container: {
     
      justifyContent: 'center',
      alignItems: 'center', 
      paddingVertical: 10, 
      width: '100%',
      backgroundColor: colors.red, 
  },
  text:{
    color: colors.egg
  },
})