

const SizeList = ({sizeList}) =>{
  return (
    <>
      {
        sizeList.map(e=>{
          return (
            <>
              <input id={e} type="radio" class="upload" name="size" value={e} />
              <label class="btn-size" for={e} > {e} </label>
            </>
          )
        })
      }
    </>

  )
}

export default SizeLis