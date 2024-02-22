import React from 'react';
import { Text, StyleSheet, View, Pressable, Image } from 'react-native';

import { colors } from '../global/colors';
import Header from '../components/Header';
import Categorias from '../components/Categorias';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
 
  return (
    <View style={styles.container}>
    
      <Categorias  navigation={navigation}/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colors.egg,
    padding: 25
    
  },
  title: {
    fontFamily: 'bold',
    fontSize: 20,
    marginBottom: 20,
    color: colors.red
  },
  categoryButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: colors.darkBlue,
    borderRadius: 5,
  
  },
  btnText:{
    fontFamily: 'regular',
    color: colors.egg
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
    padding:25
    
  },
  categoryBox:{
    
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});

export default Home;