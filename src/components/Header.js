import React, { Component } from 'react';
import "../styles/Header.css";

import NavBar from './NavBar.js'

export default class Header extends Component {

  render () {
    return (
      <div className="header">
        <div className="container">
          <nav className="navbar">
            <a href='/' className="navbar-brand"></a>
            <div id="links_container" className="navbar-nav d-flex flex-row justify-content-center">
              <NavBar />
            </div>
          </nav>
        </div>
			</div>
    )
  }
}
