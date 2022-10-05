import React from 'react';
import User from './User';
import { Data } from '../context/UserContext';
import { useContext } from 'react';

const UserList = () => {
  const { users, onDelete } = useContext(Data);
  console.log(useContext(Data));
  return (
    <>
      {users.map((user) => (
        <User key={user.id} name={user.name} email={user.email} id={user.id} onDelete={onDelete} />
      ))}
      ;
    </>
  );
};

export default UserList;
