
import { configureStore } from "@reduxjs/toolkit";
import productApi from "../services/product.service";

// rootReducers
// const reducer = combineReducers({
//   cart: cartReducer,
//   products: productsReducer
// });


const store = configureStore ({
  // có thể khai báo nhiều slice
 reducer:{
  [productApi.reducerPath]: productApi.reducer,
 },
 middleware: (getDefaultMiddleware) =>
 getDefaultMiddleware().concat(productApi.middleware)
})  


export default store;
