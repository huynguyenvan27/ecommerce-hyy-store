import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const productStoreBaseQuery = fetchBaseQuery ({
  baseUrl : "https://ecommerce-hyy.herokuapp.com/"
});


const addressBaseQuery = fetchBaseQuery({
  baseUrl : "https://provinces.open-api.vn/api/?depth=3"
})


const userBaseQuery = fetchBaseQuery({
  baseUrl: "https://todo-api-with-auth.herokuapp.com/api/auth/",
  prepareHeaders: (header, api) => {
      const user = api.getState().user;

      if (user) {
          header.append("Authorization", user.token);
          return header;
      } else {
          return header;
      }
  },
});

export {productStoreBaseQuery,addressBaseQuery,userBaseQuery};