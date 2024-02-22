// BotonVolver.js
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const BtnVolver = () => {

    const handleBackToHome = () => {
        setSelectedCategory(null);
      };

  return (
        <Pressable style={styles.btn} onPress={onPress}>
             <Text style={styles.btnText}>Volver a Home</Text>
        </Pressable>
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
      }
});

export default BtnVolver;
