import React from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar, FlatList, Image } from 'react-native';
import { colors } from '../global/colors';

const CategoryItem = ({ category, products, setSelectedCategory }) => {
  const filteredProducts = products.filter((product) => product.categoria.toLowerCase() === category.toLowerCase());
  const handleBackToHome = () => {
    setSelectedCategory(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{item.nombre}</Text>
      <Text style={styles.productDescription}>{item.descripcion}</Text>
      <Text style={styles.productPrice}>Precio: ${item.precio}</Text>
      {item.images.map((image, index) => (
      <Image key={index} source={{ uri: image }} style={styles.productImage} />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
    <Text style={styles.title}>{category}</Text>
    
    <FlatList
       style={styles.FlatListStyle}
       contentContainerStyle={styles.flatListContent}
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />


    <Pressable style={styles.btn} onPress={handleBackToHome}>
      <Text style={styles.btnText}>Volver a Home</Text>
    </Pressable>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FlatListStyle: {
    flex: 1,
  },
  flatListContent: {
    flexGrow: 1,
  },
  title: {

    fontSize: 20,
    fontFamily: 'bold',
    marginBottom: 10,
    marginTop: 20
  },
  productContainer: {
    margin: 20,
    alignItems: 'center',
    padding: 15,
    borderColor: 'black',
    borderWidth: 1, // Ancho del borde
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  productDescription: {
    fontFamily: 'light',
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.violet,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
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

export default CategoryItem;
