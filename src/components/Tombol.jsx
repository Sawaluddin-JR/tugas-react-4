/* eslint-disable react/prop-types */
import './Tombol.css'

const Tombol = (props) => {
  return (
    <button onClick={props.hanleClick} className="like">{props.children}</button>
  )
}

export default Tombol