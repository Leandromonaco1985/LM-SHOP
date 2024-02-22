import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { colors } from '../global/colors';
import { fonts } from '../global/fonts';

const Header =({navigation, title})=> {
  return (
    <View style={styles.container}>
        <Ionicons name="menu" size={40} color={colors.egg} />
       <Text style={styles.header}> LM SHOP</Text>
       <Text> {title}</Text>
       <Pressable onPress={() => navigation.navigate("Cart")}>
  <EvilIcons name="cart" size={40} color={colors.egg} />
</Pressable>

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
        backgroundColor: colors.red, 
    },
    header: {
        fontFamily: 'bold',
        fontSize: 24,
        color: colors.egg
    },
})

export default Header