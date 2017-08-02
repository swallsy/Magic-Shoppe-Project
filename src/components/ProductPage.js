import React, { Component } from 'react';
import '../styles/ProductPage.css';
import image from '../imageplaceholder.jpg';

class ProductPage extends Component {

  render () {
    return (
      <div className="mainContent">
        <div className="imageAndDescContainer">
        <img src={image} className="productImage" /></div>
        <div className="productDescription">product description</div>
        </div>
    )
  }
}

export default ProductPage;
