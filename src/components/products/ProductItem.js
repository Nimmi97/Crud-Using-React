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

function ProductItem({ productInfo }) {
  return (
    <ProductItemContainer>
      <img src={productInfo.image} className="productImage" alt={`${productInfo.title}`} />
      <span className="productInfoItem">Model: {productInfo.title}</span>
      <span className="productInfoItem">Brand: {productInfo.brand}</span>
      <span className="productInfoItem">Description: {productInfo.description}</span>
      <span className="productInfoItem">Ratings: {productInfo.rating}</span>
    </ProductItemContainer>
  );
}

export default ProductItem;
