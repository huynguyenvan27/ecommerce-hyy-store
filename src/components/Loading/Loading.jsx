import ReactLoading from "react-loading";
const Loading = () => {
  return(
    <div style={{width: '100vw' , height: '100vh'}} className='d-flex justify-content-center'>
          <ReactLoading type='bars' color="#000" />
      </div>
  )
}

export default Loading;