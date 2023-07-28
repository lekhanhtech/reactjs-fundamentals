import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from "./reducers";

const persistConfig = {
    key: 'root',
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancer = composeWithDevTools();

let store = createStore(persistedReducer, composedEnhancer);
let persistor = persistStore(store)

export {
    store,
    persistor
}

