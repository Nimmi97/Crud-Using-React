import React from 'react';
import './productList.css';

function ProductList({ title, brand, description, rating, image }) {
    return (
        <div className='card'>
            <div>
                <img src={image} alt='image loading' width="250px" height="200px" />
                <ul >
                    <li>Modal: {title}</li>
                    <li> Brand: {brand}</li>
                    <li> Discription: {description}</li>
                    <li>Ratings: {rating}</li>
                </ul>
            </div>
            {/* <div className="container"> */}

            {/* </div> */}
        </div>
    )
}

export default ProductList
