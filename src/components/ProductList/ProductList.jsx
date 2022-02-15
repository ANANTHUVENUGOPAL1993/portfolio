import React from 'react'
import "./productList.css"
import Product from "../Product/Product"
import { products } from '../../data'


const ProductList = () => {
    return (
        <div className="p1">
            <div className="p1-text">
                <h1 className="p1-title">
                    Create and Inspire
                </h1>
                <p className="p1-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto omnis dignissimos maxime modi excepturi voluptas eius molestias sed, velit facilis deserunt illo saepe ipsum laborum debitis. Perspiciatis, pariatur eaque?</p>
            </div>
            <div className="p1-list">
                {products.map((items)=>(  <Product key={items.id} img={items.img}  />))}
              
               
 
            </div>

        </div>
    )
}

export default ProductList