import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
  return (
    <nav nav className="navbar">
      <ul className="main-nav">
        <li>
          <Link className="nav-links" to="/">
            User's-List
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/addUser">
            Add-User
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/products">
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
