import React from 'react'
import './productList.css'

function ProductList({title,brand, description, rating, image}) {
  return (  
      <div className='container'>
          <div>
              <img src ={image} alt ='image loading'/>
          </div>
           <ul >
            <li>Modal: {title}</li>
            <li> Brand: {brand}</li>
            <li> Discription: {description}</li>
            <li>Ratings: {rating}</li>
           </ul>
        </div>
  )
}

export default ProductList
