import React, { useContext,useCallback } from "react";
import { myContext } from "../../App";

const SizeList = ({sizeList}) =>{
  const {size,setSize} = useContext(myContext)
  const handleSize = useCallback((e) => setSize(e))
  return (
    <>
      { 
        sizeList ? sizeList.map(e=>{
          return (
            <span key={e}>
              <input id={e} type="radio" checked={e==size} className="upload" name="name" value={e} onChange={()=>handleSize(e)}/>
              <label className="btn-size" htmlFor={e} > {e} </label>
            </span>
          )
        }) :""
      }
    </>

  )
}

export default SizeList;