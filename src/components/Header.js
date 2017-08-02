import React, { Component } from 'react';
import '../styles/Header.css';


export default class Header extends Component {

  render () {
    return (
      <div className="header">
				<a href='/'><i className="fa fa-home"></i>Home</a>
        <a href='/cart'>Shopping Cart</a>
			</div>
    )
  }
}
