import React, { useReducer } from "react";
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
            <NavLink exact to='/view-pirates' activeClassName='selected'>View Pirates</NavLink>
            </li>
            <li>
            <NavLink exact to='/add' activeClassName='selected'>Add Pirate</NavLink>
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
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;