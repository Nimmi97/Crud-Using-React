import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';
import ProductItem from './ProductItem';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;

function ProductList() {
  const [productList, setProductList] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    try {
      const productList = await axios.get('https://dummyjson.com/products');
      setProductList(productList.data.products);
    } catch (e) {
      toast.error(e.message);
    }
  };

  const onInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchableFields = ['title', 'brand', 'description', 'category'];

  useEffect(() => {
    if (searchQuery) {
      const search = searchQuery.toLowerCase();
      const filteredProductList = productList.filter((listItem) => {
        return searchableFields.find((key) => listItem[key].toLowerCase().includes(search));
      });
      setSearchResults(filteredProductList);
    }
  }, [searchQuery]);

  const productListData = searchQuery.length < 1 ? productList : searchResults;

  return (
    <>
      <input className="inputBox" value={searchQuery} onChange={onInputChange} placeholder="Enter Product Here" />
      <ProductContainer>
        {productListData?.map((item) => (
          <ProductItem
            key={item.id}
            productInfo={item}
          />
        ))}
      </ProductContainer>
    </>
  );
}
export default ProductList;
