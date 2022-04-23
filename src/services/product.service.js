import { createApi } from "@reduxjs/toolkit/query/react";
import { productStoreBaseQuery } from "./baseUrl.service";
const productApi = createApi({
  reducerPath : "product",
  baseQuery : productStoreBaseQuery,
  endpoints: (builder)=>({
    getAllProducts : builder.query({
      query:()=>{return 'product'}
    })
  })
})

export default productApi;
export const {useGetAllProductsQuery} = productApi;