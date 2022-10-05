import React from 'react';
import './user.css';

function User({ id, email, name, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="list">
      <span>{name}</span>
      <span>{email}</span>
      <span>
        <button className="delete-Button" onClick={handleDelete}>
          Delete
        </button>
      </span>
    </div>
  );
}

export default User;
