import { useDispatch } from "react-redux"
import { sortAsc, sortDes } from "../../store/slices/filter.slice"
import { useState } from "react"


const sortList = [
  {
    id:1,
    lable:"Giá tăng dần",
    type:"price",
    isAsc : true
  },
  {
    id:2,
    lable:"Giá giảm dần",
    type:"price",
    isAsc : false
  },
  {
    id:3,
    lable:"Tên: A-Z",
    type:"name",
    isAz : true
  },
  {
    id:4,
    lable:"Tên: A-Z",
    type:"name",
    isAz : false
  },
]





const LayoutPage = ({data}) => {
  const dispatch = useDispatch()
  const [value,setValue] = useState(null)
  const handleSort = (e) => {
    setValue(e.target.value)
  }
  
  // if(value == 1 ){
  //   dispatch(sortAsc(data))
  // }else if(value == 2){
  //   dispatch(sortDes(data))
  // }else{
  //   return data
  // }
  // console.log(e.target.value);

  return (
    <div class="layout-page d-flex align-items-center">
    <select class="btn-cart-list" value={value} onChange={(e)=>handleSort(e)}>
      <option value={null}>Sắp xếp</option>
      {
        sortList.map(item=>{
          return (
            <option value={item.id} key={item.id}>{item.lable}</option>
          )
        })
      }
    </select>
  </div>
  )
}

export default LayoutPage;