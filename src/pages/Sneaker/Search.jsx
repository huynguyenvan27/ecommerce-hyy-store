import { useSelector,useDispatch } from "react-redux";
import { searchItem,selectSearch } from "../../store/slices/filter.slice";
import { useState } from "react";
const Search = () =>{
  const dispatch = useDispatch()


  
  return (
    <div class="search-product">
      <input type="text" placeholder="Tìm nhanh"  onChange={(e)=>dispatch(searchItem(e.target.value))}/>
    </div>
  )
}
export default Search;