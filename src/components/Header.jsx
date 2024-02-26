import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { colors } from '../global/colors';
import { fonts } from '../global/fonts';
import { useNavigation } from '@react-navigation/native';

const Header =({navigation, title})=> {
  return (
    <View style={styles.container}>
        <Ionicons name="menu" size={40} color={colors.egg} />
        <Pressable onPress={()=> navigation.navigate("Home")}>
            <Text style={styles.header}> LM SHOP</Text>
        </Pressable>
        <Text> {title}</Text>
        
    
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        paddingVertical: 10, 
        width: '100%',
        backgroundColor: colors.red, 
    },
    header: {
        fontFamily: 'bold',
        fontSize: 30,
        color: colors.egg
    },
})

export default Header