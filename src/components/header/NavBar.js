import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="main-nav">
        <li>
          <Link className="nav-links" to="/">
            Add-User
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/users-list">
            User's-List
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
