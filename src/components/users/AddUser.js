import React, { useState, useContext } from 'react';
import { Data } from '../context/UserContext';
import './user.css';

const AddUser = () => {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const { onAdd } = useContext(Data);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(userData.name, userData.email);
    setUserData({ name: '', email: '' });
  };

  const onFieldChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleOnSubmit}>
        <h2>Add New User</h2>
        <input name="name" value={userData.name} onChange={onFieldChange} placeholder="Name" required type="text" />
        <input placeholder="Email" name="email" value={userData.email} onChange={onFieldChange} required type="email" />
        <button className="form-button" onSubmit={handleOnSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddUser;
