import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReduer from './counter'
import productsReduer from './products'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({ 
    counter: counterReduer,
    products: productsReduer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
})
const persistor = persistStore(store)

export {
    store,
    persistor
}