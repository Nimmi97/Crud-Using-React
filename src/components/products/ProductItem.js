import React from 'react';
import styled from 'styled-components';
import './productList.css';

const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;

function ProductItem({ title, brand, imgage, description, rating }) {
  return (
    <ProductItemContainer>
      <img src={imgage} className="productImage" alt={`${title}`} />
      <span className="productInfoItem">Model: {title}</span>
      <span className="productInfoItem">Brand: {brand}</span>
      <span className="productInfoItem">Description: {description}</span>
      <span className="productInfoItem">Ratings: {rating}</span>
    </ProductItemContainer>
  );
}

export default ProductItem;
