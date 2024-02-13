import React, { useState } from 'react';
import { Text, StyleSheet, View, Pressable, Image } from 'react-native';
import CategoryItem from './CategoryItem';
import categorias from '../data/categorias.json';
import productos from '../data/productos.json';
import { colors } from '../global/colors';

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
      <View style={styles.categoryBox}>
      {categorias.map((category, index) => (
        <Pressable
          key={index}
          style={styles.categoryButton}
          onPress={() => handleCategoryPress(category.categoryName)}
        >
          <Text style={styles.btnText}> {category.categoryName}</Text>
          <Image source={{ uri: category.img }} style={styles.categoryImage} />
        </Pressable>
      ))}
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

export default Home;
