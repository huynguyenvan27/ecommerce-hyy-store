
import { configureStore } from "@reduxjs/toolkit";
import productApi from "../services/product.service";
import cartSlice from "./slices/cart.slice";
import productSlice from "./slices/product.slice";
import listProductSlice from "./slices/filter.slice"
import userApi from "../services/user.service";
import userReducer from "./slices/user.slice";

 const loadState = () => {
    try {
      const serializedState = localStorage.getItem("state");
      if (!serializedState) return undefined;
      else return JSON.parse(serializedState);
    } catch(err) {
      return undefined;
    }
  };
  
 const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    } catch(err) {
      console.log(err);
    }
  };

const persistedState = loadState();

const store = configureStore ({
    reducer:{
      cart : cartSlice,
      products: productSlice,
      listProduct : listProductSlice,
      user: userReducer,
      [productApi.reducerPath]: productApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      persistedState
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware)
   })  

   
store.subscribe(() => {
saveState(store.getState());
});

export const selectCount = (state) =>
    state.cart.reduce((total, item) => (total += item.quantity), 0);

export const selectAllCartItems = (state) =>
    state.cart.map((item) => ({
        quantity: item.quantity,
        product: state.products.find((p) => p.id == item.productId),
    }));

export const selectTotalBill = (state) =>
    state.cart
        .map((item) => ({
            quantity: item.quantity,
            product: state.products.find((p) => p.id == item.productId),
        }))
        .reduce(
            (total, item) => (total += item.quantity * item.product.price),
            0
        );




export default store;
