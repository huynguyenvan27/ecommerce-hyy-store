import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const productStoreBaseQuery = fetchBaseQuery ({
  baseUrl : "https://ecommerce-hyy.herokuapp.com/"
});

const userBaseQuery = fetchBaseQuery({
  baseUrl :"https://api-nodejs-todolist.herokuapp.com/user/",
  prepareHeaders: (headers, { getState }) => {
    // Lấy token từ localStorage
    // const token = getState().user.currentUser;
    const token = localStorage.getItem("token")
    // Gắn token vào header
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
})

export {productStoreBaseQuery,userBaseQuery};