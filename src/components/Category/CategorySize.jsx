import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { filterSize, loadData } from "../../store/slices/filter.slice";
const CategorySize = ({handleSize}) => {
  const dispatch = useDispatch()
  function range(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1
    return Array(len).fill().map((_, idx) => start + (idx * step))
  }
  var result = range(35, 45, 0.5);


  return (
    <div className="category-size">
      <h1 className="category-title">Size</h1>
      <div className="size-list d-flex flex-wrap justify-content-start">
        {
          result.map(item=>{
            return <button className="size-item text-center" key={item} onClick={()=>handleSize(item)}>{item}</button>
          })
        }
      </div>
    </div>

  )

}

export default CategorySize;