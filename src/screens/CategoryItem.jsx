import React from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar, FlatList, Image } from 'react-native';
import { colors } from '../global/colors';
import { useNavigation } from '@react-navigation/native';

const CategoryItem = ({ categoria }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('CategoryDetail', { categoria: categoria });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Text style={styles.title}>{categoria.categoryName}</Text>
        <Image source={{ uri: categoria.img }} style={styles.image} />
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
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default CategoryItem;