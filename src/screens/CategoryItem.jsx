import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CategoryItem = ({ category, products, setSelectedCategory }) => {
  const filteredProducts = products.filter((product) => product.categoria.toLowerCase() === category.toLowerCase());
  const handleBackToHome = () => {
    // Aquí podrías realizar alguna otra acción si lo deseas
    setSelectedCategory(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
         <Pressable style={styles.backButton} onPress={handleBackToHome}>
        <Text>Volver a Home</Text>
      </Pressable>
      {filteredProducts.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Text style={styles.productName}>{product.nombre}</Text>
          <Text style={styles.productDescription}>{product.descripcion}</Text>
          <Text style={styles.productPrice}>Precio: ${product.precio}</Text>
        </View>
        
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productContainer: {
    marginBottom: 20,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default CategoryItem;
