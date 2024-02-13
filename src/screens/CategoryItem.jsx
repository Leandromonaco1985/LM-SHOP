import React from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar, FlatList, Image } from 'react-native';

const CategoryItem = ({ category, products, setSelectedCategory }) => {
  const filteredProducts = products.filter((product) => product.categoria.toLowerCase() === category.toLowerCase());
  const handleBackToHome = () => {
    // Aquí podrías realizar alguna otra acción si lo deseas
    setSelectedCategory(null);

  };
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{item.nombre}</Text>
      <Text style={styles.productDescription}>{item.descripcion}</Text>
      <Text style={styles.productPrice}>Precio: ${item.precio}</Text>
      {/* <Image source={{uri:item.images}} style={styles.productImage}/> */}
    </View>
  );

  return (
    <View style={styles.container}>
    <Text style={styles.title}>{category}</Text>
    <Pressable style={styles.btn} onPress={handleBackToHome}>
      <Text style={styles.btnText}>Volver a Home</Text>
    </Pressable>

    <FlatList
       style={styles.FlatListStyle}
       contentContainerStyle={styles.flatListContent}
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />


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
    fontWeight: 'bold',
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
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  btn: {
    margin: 20,
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 25,
  },
  btnText: {
    color: 'white'
  }
});

export default CategoryItem;
