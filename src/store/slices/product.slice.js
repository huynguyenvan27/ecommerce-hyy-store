import { createSlice } from "@reduxjs/toolkit";
import productApi from "../../services/product.service";

const productSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            productApi.endpoints.getAllProducts.matchFulfilled,
            (state, {payload}) => {
                return payload;
            }
        );
    },
});

export default productSlice.reducer;

export const selectAllProducts = (state) => state.products;
export const selectProductById = (id) => (state) =>{
    state.products.find((item) => item.id == id)
}
    