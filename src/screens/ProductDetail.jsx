import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Counter from '../components/Counter copy';
import { colors } from '../global/colors';

const ProductDetail = ({ route }) => { // Agregar `route` como prop
    const { producto } = route.params;
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>{producto.nombre}</Text>
      <Image source={{ uri: producto.images[0] }} style={styles.image} />
      <Text style={styles.description}>{producto.descripcion}</Text>
      <Text style={styles.price}>Precio: ${producto.precio}</Text>
      <Text style={styles.stock}>Stock disponible: {producto.stock}</Text>
      <Counter/>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}> Add To Cart</Text>
      </Pressable>
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

export default ProductDetail