import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const productStoreBaseQuery = fetchBaseQuery ({
  baseUrl : "http://localhost:3000/"
  
});


export {productStoreBaseQuery};