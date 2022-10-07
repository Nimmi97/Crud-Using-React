import React from 'react';
import User from './User';
import { Data } from '../context/UserContext';
import { useContext } from 'react';

const UserList = () => {
  const { users, onDelete } = useContext(Data);
  return users.map((user) => <User key={user.id} user={user} onDelete={onDelete} />);
};

export default UserList;
