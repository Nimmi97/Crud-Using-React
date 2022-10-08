import React from 'react';
import './user.css';

const User = ({ user, onDelete }) => {
  const handleDelete = () => {
    onDelete(user.id);
  };

  return (
    <div className="list">
      <span>{user.name}</span>
      <span>{user.email}</span>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default User;
