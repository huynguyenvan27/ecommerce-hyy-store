

const SizeList = ({sizeList,handleSize}) =>{
  return (
    <>
      { 
        sizeList ? sizeList.map(e=>{
          return (
            <span key={e}>
              <input id={e} type="radio" className="upload" name="name" value={e} onChange={()=>handleSize(e)}/>
              <label className="btn-size" htmlFor={e} > {e} </label>
            </span>
          )
        }) :""
      }
    </>

  )
}

export default SizeList;