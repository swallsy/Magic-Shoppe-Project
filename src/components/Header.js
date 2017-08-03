import React, { Component } from 'react';
import "../styles/Header.css";


export default class Header extends Component {

  render () {
    return (
      <div className="header">
        <div className="container">
          <nav className="navbar">
            <a href='/' className="navbar-brand"></a>
            <div id="links_container" className="navbar-nav d-flex flex-row justify-content-center">

              <a href='/product' className="nav-item nav-link px-5 pb-3">Product page</a>
              <a href='/receipt' className="nav-item nav-link px-5 pb-3">Receipt</a>
              <a href='/cart' className="nav-item nav-link px-5 pb-3">Shopping cart</a>
            </div>
          </nav>
        </div>
			</div>
    )
  }
}
