import React, { Component } from 'react';
import "../styles/Header.css";
import "../styles/NavBar.css";

import {NavLink} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
			<div className= 'row'>
	      <nav className= 'row'>
	        <NavLink activeClassName="selected" className="nav-link" exact to="/">
	          Home
	        </NavLink>
	        <NavLink activeClassName="selected" className="nav-link" exact to="/product">
	          Product
	        </NavLink>
	        <NavLink activeClassName="selected" className="nav-link" exact to="/cart">
	          Cart
	        </NavLink>
	      </nav>
			</div>
    );
  }
}

export default NavBar;
