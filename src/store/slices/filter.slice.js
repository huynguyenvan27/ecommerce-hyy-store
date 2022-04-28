import { createSlice } from "@reduxjs/toolkit";


const listProductSlice =  createSlice({

  name : "listProduct",
  initialState :{
    brand: [],
    size : null,
    string :"",
    items: [],
    data : []
  },
  reducers : {
    loadData : (state,{payload}) =>{
      state.data = payload
    },

    sortAsc : (state) =>{
      const sortPriceAsc  = state.items.sort((a, b) => a.price - b.price)
      return {
        ...state,
        items: sortPriceAsc
    }},
    sortDes : (state) =>{
      let sortPriceDes = state.items.sort((a, b) => b.price - a.price)
      return {
          ...state,
          items: sortPriceDes
      }
    },
    filterBrand : (state,{payload}) =>{
        state.brand.push(payload)      
    },
    removeBrand : (state,{payload})=>{
      const index = state.brand.findIndex(item => item == payload);
      state.brand.splice(index,1)
    },
    removeALlBrand : (state) => {
      state.brand = []
    },
    searchItem : (state,payload) =>{
      state.string = payload
    },
    filterSize : (state,{payload}) =>{
      state.size = payload
    }
  }

})


export default listProductSlice.reducer;
export const {sortAsc,sortDes,filterBrand,filterSize,removeBrand,removeALlBrand,searchItem,loadData} = listProductSlice.actions


export const selectBrand  = (state) => state.listProduct.brand
export const selecfilterBrand = (state) =>
  state.products.filter((p) => state.listProduct.brand.includes(p.brand.toLowerCase()))

export const selectfilterSize = (state) =>state.products.filter(item => item.list_size.includes(state.listProduct.size))

export const selectSearch = (state) => 
  state.products.filter(item=>item.name.toLowerCase().includes(state.listProduct.string))


export const selectData = (state) => state.data