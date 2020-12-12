import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <header>
      <nav id='navbar'>
        <div className='my-container'>
          <h1 className='logo'>
            <NavLink to='/'>Frontend for Travia's API</NavLink>
          </h1>
          <ul>
            <li>
            <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
            </li>
            <li>
            <NavLink exact to='/adminLogin' activeClassName='selected'>Admin Login</NavLink>
            </li>
            <li>
            <NavLink exact to='/view-question' activeClassName='selected'>View Questions</NavLink>
            </li>
            <li>
            <NavLink exact to='/view-player' activeClassName='selected'>View Player</NavLink>
            </li>
            <li>
            <NavLink exact to='/logout' activeClassName='selected'>Logout</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;