import { createSlice } from '@reduxjs/toolkit'
import products from './initData';
const id = 5;

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products,
  },
  reducers: {
    addProduct: (state, action) => {
      id++;
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