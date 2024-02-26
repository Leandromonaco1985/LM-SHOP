import { createSlice } from "@reduxjs/toolkit";
import productos from '../../../data/productos.json';
import categorias from "../../../data/categorias.json";

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        value: {
            categorias: categorias,
            productos: productos,
            categorySelected: '',
            productSelected: null,
            productsFilteredByCategory: [],
        },
    },
    reducers: {
        setCategorySelected: (state, action) => {
            const categorySelected = action.payload.categoryName;
            const productsFiltered = productos.filter(producto => producto.categoria.toLowerCase() === categorySelected.toLowerCase());
            state.value.categorySelected = categorySelected;
            state.value.productsFilteredByCategory = productsFiltered;
        },
        setProductsIdSelected: (state, action) => {
            state.value.setProductsIdSelected = action.payload;
        },
    },
});

export const { setCategorySelected, setProductsIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
