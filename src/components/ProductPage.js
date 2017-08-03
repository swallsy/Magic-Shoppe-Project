import React, { Component } from 'react';
import '../styles/ProductPage.css';
import image from '../imageplaceholder.jpg';

class ProductPage extends Component {

  render () {
    return (
      <div className="pageContainer">
      <div className="productContainer">
        <div className="imageAndDescContainer">
          <img src={image} className="productImage" />
          <div className="productDescriptionGroup">
            <span className="productTitle">Product Title</span>
            <span className="productDescriptionPreview">Product Description Preview</span>
          </div>
        </div>
      </div>
      <div className="revsDescContainer">
        <ul className="nav nav-tabs">
    <li className="active"><a data-toggle="tab" href="#description">Description</a></li>
    <li><a data-toggle="tab" href="#reviews">Reviews</a></li>
  </ul>

  <div className="tab-content">
    <div id="description" className="tab-pane fade in active">
      <h3>Description</h3>
      <p>enter production description here</p>
    </div>
    <div id="reviews" className="tab-pane fade">
      <h3>Reviews</h3>
      <p>enter product reviews here</p>
    </div>
  </div>
      </div>
      </div>
    )
  }
}

export default ProductPage;
