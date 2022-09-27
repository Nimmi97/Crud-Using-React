import React, { useEffect, useState } from 'react';
import AddUser from './components/users/AddUser';
import User from './components/users/User';
import ProductList from './components/products/ProductList';
import NavBar from './components/header/NavBar';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [productList, setProductList] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetchUsers();
    fetchProductData();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const fetchProductData = async () => {
    try {
      const productList = await axios.get('https://dummyjson.com/products');
      setProductList(productList.data.products);
    } catch (e) {
      toast.error(e.message);
    }
  };

  const onAdd = async (name, email) => {
    try {
      const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name: name,
        email: email,
      });
      setUsers((users) => [...users, resp]);
    } catch (err) {
      toast.error(err);
    }
  };
  const onDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(
        users.filter((user) => {
          return user.id !== id;
        })
      );
    } catch (error) {
      toast.error(error);
    }
  };
  const inputHandler = (searchQuery) => {
    setSearchQuery(searchQuery);

    if (searchQuery !== '') {
      const filteredProductList = productList.filter((listItems) => {
        return Object.values(listItems).join('').toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase());
      });
      setSearchResults(filteredProductList);
    }
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/addUser" element={<AddUser onAdd={onAdd} />} />
        <Route
          path="/products"
          element={
            <ProductList
              inputHandler={inputHandler}
              searchQuery={searchQuery}
              data={searchQuery.length < 1 ? productList : searchResults}
            />
          }
        />
        <Route
          path="/"
          element={users.map((user) => (
            <User id={user.id} key={user.id} name={user.name} email={user.email} onDelete={onDelete} />
          ))}
        />
      </Routes>
      <ToastContainer
        theme="colored"
        position="top-right"
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </div>
  );
};
export default App;
