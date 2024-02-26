import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { colors } from '../global/colors';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
export const Counter = () => {
  const count = useSelector ((state)=>state.counterReducer.value)
  const dispatch = useDispatch ()


  return (
    <View style={styles.container}>
      <Pressable  style={styles.btn} onPress = {()=> dispatch(decrement())}>
        <Text style={styles.btnText}> - </Text>
      </Pressable>
      <View>
        <Text style={styles.countstyle}>{count}</Text>
      </View>
      <Pressable style={styles.btn} onPress={()=> dispatch(increment())}>
        <Text style={styles.btnText}> + </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
      margin: 25,
      padding: 15,
      backgroundColor: colors.violet,
      borderRadius: 15,
    },
    btnText: {
      fontFamily: 'light',
      color: 'white'
    },
    countstyle:{
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 15
    },
    container:{
      flexDirection: 'row',    
      justifyContent: 'center',
      alignItems: 'center'
      
    }
});
export default Counter;