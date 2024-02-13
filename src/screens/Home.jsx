import React, { useState } from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import CategoryItem from './CategoryItem';
import categorias from '../data/categorias.json';
import productos from '../data/productos.json';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  if (selectedCategory) {
    return <CategoryItem category={selectedCategory} products={productos} setSelectedCategory={setSelectedCategory} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías de Productos</Text>
      {categorias.map((category, index) => (
        <Pressable
          key={index}
          style={styles.categoryButton}
          onPress={() => handleCategoryPress(category)}
        >
          <Text>{category}</Text>
        </Pressable>
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
  categoryButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
});

export default Home;
