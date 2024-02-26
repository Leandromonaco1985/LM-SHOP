import { StyleSheet, Text, View , Image, } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
import { colors } from '../global/colors';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const ProductDetail = ({ route, navigate }) => {
  // Obtener la información del producto de las props de la ruta
  const { producto } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>{producto.nombre}</Text>
      <Image source={{ uri: producto.images[0] }} style={styles.image} />
      <Text style={styles.description}>{producto.descripcion}</Text>
      <Text style={styles.price}>Precio: ${producto.precio}</Text>
      <Text style={styles.stock}>Stock disponible: {producto.stock}</Text>
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'bold',
    fontSize: 20,
    marginBottom: 20,
    color: colors.red
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 5,
  },
  stock: {
    fontSize: 16,
  },
});

export default ProductDetail