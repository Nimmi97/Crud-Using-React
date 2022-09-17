import React, { useEffect, useState } from "react";
import AddUser from "./components/AddUser";
import User from "./components/User";
import ProductList from './components/products/ProductList'

const App = () => {
  const [users, setUsers] = useState([]);
  const [productList, setProductList] = useState()
  useEffect(() => {
    fetchData();
    fetchProductData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchProductData = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductList(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
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
        console.log(err);
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
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h3>My Project</h3>

      <br />
      <AddUser onAdd={onAdd} />
      <div>
        {users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
            onDelete={onDelete}
          />
        ))}
      </div>
      <hr/>
      <div>
        {productList.products.map((data) => 
        (<ProductList title={data.title} brand={data.brand} description ={data.description} rating ={data.rating} image ={data.thumbnail}/>)
        
        )}
      </div>

    </div>
  );
};
export default App;


