import "./product.css"
import React from 'react'
import me from "../../image/1.png"


const Product = ({ img }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>


      </div>
      <a href="dsAD" target="_blank" rel="noreferrer">      <img src={img} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default Product