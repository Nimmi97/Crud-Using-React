import React, { useState } from 'react';
import './user.css';

const AddUser = ({ onAdd }) => {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(userData.name, userData.email);
    setUserData({ name: '', email: '' });
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleOnSubmit}>
        <h2>Add New User</h2>
        <input
          placeholder="Name"
          name="name"
          value={userData.name}
          onChange={(e) => setUserData({ name: e.target.value })}
          required
        />
        <input
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={(e) => setUserData({ email: e.target.value })}
          required
          type="email"
        />
        <button className="form-button" onSubmit={handleOnSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddUser;
