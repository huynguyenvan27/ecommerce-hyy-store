
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

const LayoutPage = ({handleSort}) => {
  return (
    <div class="layout-page d-flex align-items-center">
    <select class="btn-cart-list" onChange={handleSort}>
      <option value={null}>Sắp xếp</option>
      {
        sortList.map(item=>{
          return (
            <option value={item.lable} key={item.id}>{item.lable}</option>
          )
        })
      }
    </select>
  </div>
  )
}

export default LayoutPage;