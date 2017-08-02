import React, { Component } from 'react';
import '../styles/ProductPage.css';
import image from '../imageplaceholder.jpg';

class ProductPage extends Component {

  render () {
    return (
      <div className="mainContent">
        <div className="imageAndDescContainer">
        <img src={image} className="productImage" />
        <div className="productDescriptionGroup">
        <span className="productTitle">Product Description Title</span>
        <span className="productDescription">Product Description</span>
        </div>
        </div>
        </div>
    )
  }
}

export default ProductPage;
