import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'

const CartItem = (item) => {


  return (
    <View style={styles.container}>
        <View style={styles.productCard}>
            <Text style={styles.text}> Nombre: {item.nombre}</Text>
            <Text style={styles.text}>Marca: {item.marca}</Text>
            <Text style={styles.text}>Precio: {item.precio}</Text>
            <Text style={styles.text}> Cantidad: {item.quantity}</Text>
        </View>
        <View>


        </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
          flexDirection: 'row', 
          justifyContent: 'center',
          alignItems: 'center', 
        
          paddingVertical: 10, 
          width: '100%',
          backgroundColor: colors.red, 
      },
      text:{
        color: colors.egg
      },
      productCard: {
        backgroundColor: colors.violet,
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // elevation: 5,
    },
})