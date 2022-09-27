import React, { useRef } from 'react';
import styled from 'styled-components';
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
  justify-content: space-evenly; ;
`;
const InputConatainer = styled.div`
  display: flex;
`;
const Button = styled.button`
  margin: 5px;
  padding: 5px;
  background: linear-gradient(to left, #1cb5e0, #000046);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: white;
  border-radius: 5px;
`;

function ProductList({ data, searchQuery, inputHandler }) {
  const inputRef = useRef('');
  const getinputValue = () => {
    inputHandler(inputRef.current.value);
  };

  return (
    <>
      <InputConatainer>
        {' '}
        <input value={searchQuery} onChange={getinputValue} ref={inputRef} />
        <Button onClick={getinputValue}>Search</Button>
      </InputConatainer>

      <ProductContainer>
        {data?.map((items) => (
          <Container key={items.id}>
            <img src={items.thumbnail} alt="image loading" width="250px" height="200px" />
            <ProductName>Model: {items.title}</ProductName>
            <ProductName> Brand:{items.brand}</ProductName>
            <ProductName>Discription: {items.description}</ProductName>
            <ProductName>Ratings: {items.rating}</ProductName>
          </Container>
        ))}
      </ProductContainer>
    </>
  );
}

export default ProductList;
