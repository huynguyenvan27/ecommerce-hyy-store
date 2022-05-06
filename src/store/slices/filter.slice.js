import { createSlice } from "@reduxjs/toolkit";


const listProductSlice =  createSlice({

  name : "listProduct",
  initialState :{
    brand: [],
    size : [],
    string :"",
    items: [],
    data : []
  },
  reducers : {
    loadData : (state,{payload}) =>{
      state.data = payload
    },
    sortAsc : (state,{payload}) =>{
      payload.sort((a, b) => a.price - b.price)
   },
    sortDes : (state,{payload}) =>{
      payload.sort((a, b) => b.price - a.price)
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
      state.size.push(payload)
    },
    removeSize : (state,{payload}) =>{
      const index = state.size.findIndex(item => item == payload);
      state.size.splice(index,1)
    }
  }

})


export default listProductSlice.reducer;
export const {sortAsc,sortDes,filterBrand,filterSize,removeBrand,removeALlBrand,searchItem,loadData,removeSize} = listProductSlice.actions

export const selectBrand  = (state) => state.listProduct.brand
export const selectSize = (state) => state.listProduct.size


export const selecfilterBrand = (state) =>
  state.products.filter((p) => state.listProduct.brand.includes(p.brand.toLowerCase()))

export const selectfilterSize = (state) =>state.products.filter(item => item.list_size.some(z=>state.listProduct.size.includes(z)))

export const selectSearch = (state) => 
  state.products.filter(item=>item.name.toLowerCase().includes(state.listProduct.string.payload))

export const selectString = (state) => state.listProduct.string.payload

export const selectMultipleFilter = (state) => 
  state.products.filter((p) => state.listProduct.brand.includes(p.brand.toLowerCase()))
  .filter((item) =>
      item.list_size.some(z=>state.listProduct.size.includes(z)))





