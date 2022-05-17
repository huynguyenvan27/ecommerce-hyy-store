import { createSlice } from "@reduxjs/toolkit";


const initialState = () => ({
  brand: [],
  size : [],
  string :"",
  data : []
})

const listProductSlice =  createSlice({

  name : "listProduct",
  initialState : initialState(),
  reducers : {
    reset: (state) => initialState(),
    loadData : (state,{payload}) => {
      return{
        ...state,
        data : payload
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
      state.size.push(payload)
    },
    removeSize : (state,{payload}) =>{
      const index = state.size.findIndex(item => item == payload);
      state.size.splice(index,1)
    },
    sortAsc : (state,{payload}) =>{
      const result =payload.sort((a, b) => a.price - b.price)
      return{
        ...state,
        data : result
      } 
   },
    sortDes : (state,{payload}) =>{
      let result =payload.sort((a, b) => b.price - a.price)
      return{
        ...state,
        data : result
      }
    },
    sortAz : (state,{payload}) => {
      let sortNameAsc = payload.sort((a, b) => a.brand.localeCompare(b.brand))
      return {
          ...state,
          data: sortNameAsc
      }
    },
    sortZa : (state,{payload}) => {
      let sortNameDes = payload.sort((a, b) => (b.name).localeCompare(a.name))
      return {
          ...state,
          data: sortNameDes
      }
    } 
  }

})


export default listProductSlice.reducer;
export const {reset,sortZa,sortAz,loadData,sortAsc,sortDes,filterBrand,filterSize,removeBrand,removeALlBrand,searchItem,removeSize} = listProductSlice.actions

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


export const selectSort = (state) => state.listProduct.data



