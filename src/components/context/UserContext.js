import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
export const Data = createContext({});

function UserContext({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const onAdd = async (name, email) => {
    console.log('Name', name, email);
    try {
      const resp = await axios.post('https://jsonplaceholder.typicode.com/users', {
        name: name,
        email: email,
      });
      setUsers([resp, ...users]);
    } catch (error) {
      toast.error(error.message);
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
      toast.error(error.message);
    }
  };
  return <Data.Provider value={{ users, onAdd, onDelete }}>{children}</Data.Provider>;
}

export default UserContext;
