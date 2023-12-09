import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
import products from './initData';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products,
  },
  reducers: {
    addProduct: (state, action) => {
      uuidv4();
      state.products.push({
        ...action.payload,
        id,
      });
    },
    deleteProduct: (state, action) => {
        state.products = state.products.filter((p => p.id !== action.id));
    },
    editProduct: (state, action) => {
        state.products = state.products.map((p) => p.id === action.payload.id ? action.payload: p);
    },
  },
})

export const { addProduct, deleteProduct, editProduct } = productsSlice.actions

export default productsSlice.reducer