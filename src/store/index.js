
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../components/features/counter/counterSlice';
import shopReducer from '../components/features/shop/shopSlice'
export default configureStore({
    
    reducer:{
        counterReducer,
        shopReducer
    }
});