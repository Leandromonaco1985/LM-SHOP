import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux'; 
import { useEffect } from 'react';
import { colors } from '../global/colors';

const CategoryDetail = ({ route, navigation }) => { // Agregar `route` como prop
    const { categoria } = route.params;
    const productos = useSelector(state => state.shopReducer.value.productos); // Obtener productos desde el estado

    // useEffect(() => {
    //     // Lógica de efecto aquí
    // }, []);

    const filteredProducts = productos.filter(producto => producto.categoria.toLowerCase() === categoria.categoryName.toLowerCase());

    
    return (
        <View style={styles.container}>
          
            <Text style={styles.title}> {categoria.categoryName}</Text>
            <View style={styles.categoryBox}>

            <FlatList
                data={filteredProducts}
                renderItem={({ item }) => {
                   
                    return (
                        <Pressable style={styles.productContainer} onPress={() => navigation.navigate('ProductDetail', { producto: item })}>
                            <Text>{item.nombre}</Text>
                            <Text>{item.precio}</Text>
                            <Image source={{ uri: item.images[0] }} style={styles.productImage} />
                        </Pressable>
                    );
                }}
                keyExtractor={(item) => item.id.toString()} 
                showsVerticalScrollIndicator = {false}
                />
            </View>
        </View>
    );
}
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
      categoryImage: {
        width: 100,
        height: 100,
        marginBottom: 5,
        padding:25
        
      },
      productContainer: {
        margin: 20,
        alignItems: 'center',
        padding: 15,
        borderColor: 'black',
        borderWidth: 1, 
        borderRadius: 10,
      },
      productImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
      },
})



export default CategoryDetail;
