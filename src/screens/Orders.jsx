import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import orders from '../data/orders.json'
import OrderItem from '../components/OrderItem'
import { colors } from '../global/colors'

const Orders = () => {
  return (
    <View style={styles.container}>
      <FlatList
      data={orders}
      renderItem={({item})=> <OrderItem item={item}/>}
      keyExtractor={(order)=>order.id}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
          flexDirection: 'row', 
          justifyContent: 'space-around', 
          alignItems: 'center', 
          paddingVertical: 10, 
          width: '100%',
          backgroundColor: colors.red, 
      },
      
})