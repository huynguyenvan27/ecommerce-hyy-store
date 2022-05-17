import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterSize,removeSize} from "../../store/slices/filter.slice";
const CategorySize = () => {
  const dispatch = useDispatch()
  // mảng size
  function range(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1
    return Array(len).fill().map((_, idx) => start + (idx * step))
  }

  var result = range(35, 45, 0.5);

  const [kt,setKt] = useState ({})
  
  // xử lý lọc size
  const handleFilterSize = (e) =>{
    if(e.target.checked){
      dispatch(filterSize(+e.target.value))
      setKt({'size': e.target.value})
    }
    else{
      setKt({'size' : null})
      dispatch(removeSize(e.target.value))
    }
  }
  
  return (
    <div className="category-size">
      <h1 className="category-title">Size</h1>
      <div className="size-list d-flex flex-wrap justify-content-start">
        {
          result.map(item=>{
            return(
            <span key= {item}>
              <input type="checkbox" name='size' key={item} id={`${item}-category`} value={item} className="d-none" onChange={handleFilterSize}/>
              <label htmlFor= {`${item}-category`} className="btn-size">{item}</label>
            </span>
              )})
          }
      </div>
    </div>

  )

}

export default CategorySize;