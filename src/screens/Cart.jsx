import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import allCartItems from '../data/cart.json';
import { colors } from '../global/colors';
import CartItem from '../components/CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0); // Inicializar en 0
  
  useEffect (()=>{
    setCartItems(allCartItems);
  }, []);
  
  useEffect(() => {
      const total = cartItems.reduce((acc, currentItem) => {
          const itemPrecio = parseFloat(currentItem.precio);
          const itemCantidad = parseFloat(currentItem.quantity);
          return acc + (itemPrecio * itemCantidad);
      }, 0);
      setPrecioTotal(total);
  }, [cartItems]);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cart</Text>
            <View>
                <FlatList 
                    data={cartItems}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <CartItem {...item} />}
                />
                <Text>Total Carrito: ${precioTotal}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      alignItems: 'center', 
      paddingVertical: 10, 
      width: '100%',
      backgroundColor: colors.red, 
  },
  header: {
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingTop: 20,
    fontFamily: 'bold',
    fontSize: 30,
    color: colors.egg
},
title: {
  fontFamily: 'bold',
  fontSize: 20,
  marginBottom: 20,
  color: colors.red
},
})

export default Cart