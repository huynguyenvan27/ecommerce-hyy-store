
import './pagination.css'

const Pagination = ({
  totalProducts,
  productsPerPage,
  currentPage,
  handleSetCurrentPagePage,
  handlePrev,
  handleNext
}) => {
  
  const pageNumbers = [];

  for(let i=1; i <= Math.ceil(totalProducts/productsPerPage); i++){
    pageNumbers.push(i)
  }
  

  return (
    <nav aria-label="Page navigation">
    <ul className="pagination">
      <li className = "page-item">
        <a className = {currentPage == 1 ?"page-link disabled" :"page-link"} href="#" aria-label="Next" onClick={handlePrev}>
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      {pageNumbers.map(item => {
        return(
          <li className="page-item" key={item}>
            <a 
              className={currentPage == item ? "page-link active" :"page-link"} 
              href="#"
              onClick={() => handleSetCurrentPagePage(item)}
              style = {{cursor:"pointer"}}
            >
              {item}
            </a>
            </li>
        )
      })}
      <li className="page-item">
        <a className={currentPage >= pageNumbers.length ?"page-link disabled" : "page-link"} href="#" aria-label="Next" onClick={handleNext}>
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default Pagination