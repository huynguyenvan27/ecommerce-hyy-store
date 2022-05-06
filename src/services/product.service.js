import { createApi } from "@reduxjs/toolkit/query/react";
import { productStoreBaseQuery ,addressBaseQuery} from "./baseUrl.service";
const productApi = createApi({
  reducerPath : "productsApi",
  baseQuery : productStoreBaseQuery,
  endpoints: (builder)=>({
    getAllProducts : builder.query({
      query:()=>{return {url: 'products',
    method: 'GET',
  mode: 'no-cors'}}
    }),
    getProductById: builder.query({
      query: ({ id }) => `products/${id}`,
    }),
  })
})



export default productApi;
export const {useGetAllProductsQuery,useGetProductByIdQuery} = productApi;