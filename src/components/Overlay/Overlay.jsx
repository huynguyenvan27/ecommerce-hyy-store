import './overlay.css'

const Overlay = ({state,btnToogle}) => {
  return (

    <div className={state ?  "overlay open" : "overlay"} onClick={btnToogle}>

    </div>

  )
}
export default Overlay;