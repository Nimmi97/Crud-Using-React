import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;

const ProductName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ProductContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
gap: 25px;
justify-content: space-evenly;;
`;

function ProductList({ data }) {
    return (
        <ProductContainer>{
            data?.map(items => <Container><img src={items.thumbnail} alt='image loading' width="250px" height="200px" />
                <ProductName>Model: {items.title}</ProductName>
                <ProductName> Brand:{items.brand}</ProductName>
                <ProductName>Discription: {items.description}</ProductName>
                <ProductName>Ratings: {items.rating}</ProductName></Container>)
        }</ProductContainer>


    )
}

export default ProductList
