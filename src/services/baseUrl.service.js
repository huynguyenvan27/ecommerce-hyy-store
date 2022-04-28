import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const productStoreBaseQuery = fetchBaseQuery ({
  baseUrl : "http://localhost:3000/"
  
});


const addressBaseQuery = fetchBaseQuery({
  baseUrl : "https://provinces.open-api.vn/api/?depth=3"
})

export {productStoreBaseQuery,addressBaseQuery};