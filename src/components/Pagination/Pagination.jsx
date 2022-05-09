import './pagination.css'

const Pagination = () => {
  return (
    <nav aria-label="Page navigation">
    <ul className="pagination">
      <li className="page-item"><a className="page-link active" href="#">1</a></li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default Pagination