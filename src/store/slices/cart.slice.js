import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {onCart:[],wishList:[],view:[],numberSale : 0},
    reducers : {
        addWishList : (state,{payload}) =>{
            const item = state.wishList.find(item => item.productId == payload) ;
            if(item){
                return
            }else{
                state.wishList.push({
                    productId: payload,    
                })
            }
        },
        removeWishList :(state,{payload}) =>{
            const index = state.wishList.findIndex(item => item.productId == payload) ;
            state.wishList.splice(index,1)
        },
        review :(state,{payload}) =>{
            state.view = payload;
        },
        addOption :(state,{payload}) =>{
            const item = state.onCart.find(item => item.productId == payload.id && item.size == payload.size) ;
            if(item ){
                item.quantity += 1;
            }else{
                state.onCart.push({
                    productId: payload.id,
                    size : payload.size,
                    quantity: 1         
                })
            }
        },
        remove : (state,{payload})=>{
            const index = state.onCart.findIndex(item => item.productId == payload);
            state.onCart.splice(index,1)
        },
        increase : (state,{payload}) =>{
            const item = state.onCart.find(item=>item.productId == payload.id && item.size == payload.size) 
            item.quantity += 1;
        },
        decrease : (state,{payload}) => {
            const item = state.onCart.find(item =>item.productId == payload.id && item.size == payload.size) 
            if(item.quantity>1){
                item.quantity -=1;
            }   
        },
        clear: (state) =>{
            return []
        },
        addSale : (state,{payload}) => {
            state.numberSale = payload
        }
    }
})


export default cartSlice.reducer;
export const {remove,decrease,increase,addOption,addWishList,review, removeWishList,addSale} = cartSlice.actions;


export const selectCount = (state) =>
    state.cart.onCart.reduce((total, item) => (total += item.quantity), 0);

export const selectAllCartItems = (state) =>
    state.cart.onCart.map((item) => ({
        quantity: item.quantity,
        size : item.size,
        product: state.products.find((p) => p.id == item.productId),
    }));

export const selectTotalBill = (state) =>     
    state.cart.onCart
    .map((item) => ({
        quantity: item.quantity,
        size : item.size,
        product: state.products.find((p) => p.id == item.productId),
    }))
    .reduce(
        (total, item) => ((total += (item.quantity * item.product.price))),
        0
    ) 

export const selectAddWishList = (state) => state.cart.wishList.map(item=>(state.products.find((p) => p.id == item.productId)
))

export const selectView = (state) => state.products.filter(item => item.id == state.cart.view )
export const selectNumberSale = state => state.cart.numberSale