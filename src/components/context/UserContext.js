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
  return <Data.Provider value={{ users, onAdd, onDelete }}>{children}</Data.Provider>;
}

export default UserContext;
