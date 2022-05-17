

const sortList = [
  {
    id:1,
    lable:"Giá tăng dần",
  },
  {
    id:2,
    lable:"Giá giảm dần",
  },
  {
    id:3,
    lable:"Tên: A-Z",
  },
  {
    id:4,
    lable:"Tên: Z-A",
  },
]


const LayoutPage = ({value,handleSort}) => {

  return (
    <div className="layout-page d-flex align-items-center">
    <select className="btn-cart-list" value={value} onChange={(e)=>handleSort(e)}>
      <option value="null">Mặc định</option>
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