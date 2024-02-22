import React from 'react';
import { Text, StyleSheet, View,FlatList } from 'react-native';
import CategoryItem from '../screens/CategoryItem'
import categorias from '../data/categorias.json';
import { colors } from '../global/colors';
import { useNavigation } from '@react-navigation/native';

const Categorias =()=>{
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>Categorías de Productos</Text>
        <View style={styles.categoryBox}>
            <FlatList
            data={categorias}
            renderItem={({item})=>(<CategoryItem categoria={item}  navigation={navigation} />)}
            keyExtractor={(item) => item.categoryName}
            showsVerticalScrollIndicator={false}
            />

           
        </View>
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
  
export default Categorias