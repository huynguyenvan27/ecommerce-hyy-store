import { createApi } from "@reduxjs/toolkit/query/react";
import { productStoreBaseQuery ,addressBaseQuery} from "./baseUrl.service";
const productApi = createApi({
  reducerPath : "product",
  baseQuery : productStoreBaseQuery,
  endpoints: (builder)=>({
    getAllProducts : builder.query({
      query:()=>{return 'product'}
    }),
    getProductById: builder.query({
      query: ({ id }) => `product/${id}`,
    }),
  })
})



export default productApi;
export const {useGetAllProductsQuery,useGetProductByIdQuery} = productApi;