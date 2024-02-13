import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Header =()=> {
  return (
    <View style={styles.container}>
        <Ionicons name="menu" size={40} color="black" />
       <Text style={styles.header}> LM SHOP</Text>
       <EvilIcons name="cart" size={40} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingVertical: 10, 
        width: '100%',
        backgroundColor: 'lightblue', 
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
      },
})

export default Header