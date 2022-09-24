import React, { useEffect, useState } from "react";
import AddUser from "./components/users/AddUser";
import User from "./components/users/User";
import ProductList from './components/products/ProductList';
import NavBar from './components/header/NavBar';
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [productList, setProductList] = useState(null);
  useEffect(() => {
    fetchUsers();
    fetchProductData();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      setUsers(users);
    }
    catch (e) {
      toast.error(e.message, {
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: true,
        rtl: false,
      });
    }

  };
  const fetchProductData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const productList = await response.json();
      setProductList(productList.products);
    }
    catch (e) {
      toast.error(e.message, {
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: true,
        rtl: false,
      });
    }
  };

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body:
        JSON.stringify({
          name: name,
          email: email,
        }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          rtl: false,
        });
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          rtl: false
        });
      });
  };
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/addUser" element={<AddUser onAdd={onAdd} />} />
        <Route path="/products" element={<ProductList data={productList} />} />
        <Route path="/" element={users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
            onDelete={onDelete}

          />
        ))} />
      </Routes>
      <ToastContainer />
    </div>

  );
};
export default App;


