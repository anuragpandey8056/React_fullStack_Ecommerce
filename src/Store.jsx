import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./Slice"
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
const persistconfig={
    key:"root",
    storage,
}

const persistedReducer=persistReducer(persistconfig,myreducer)
const Store =configureStore({
    reducer:{
        mycart:persistedReducer
    }
})
export default Store;
export const persistor = persistStore(Store);