import React, { Component } from 'react';
import "../styles/ShoppingCart.css";


class ShoppingCart extends Component {

  constructor(props) {
        super(props)
        this.state = {
            cartItems: []
        }
    }

  componentDidMount() {
   fetch('https://guarded-retreat-23297.herokuapp.com/products')
     .then (response => response.json())
     .then (response => {
         console.log(response);

     let yourItems = response.map(product => {
         return(
             <div key={product.id} className="row">
               <div className="col-md-12 item-row">
                   <img alt="card" src={product.image} className="col-md-3 item-image photo" />
                    <div className="col-md-9 item_info">
                      <div className="left-info col-md-7">
                        <h4 className="item-name">{product.name}</h4><p>${product.price}</p>
                        <p>{product.description}</p>
                      </div>
                      <div className="right-info col-md-2">
                        <p className="quantity">Quantity: 2</p>
                        <p className="total">Total: ${product.price * 2}</p>
                        <a href="#" className="btn remove-item">remove item</a>
                      </div>
                    </div>
              </div>
            </div>
         )
     })
         this.setState({cartItems: yourItems})
         console.log(this.state.cartItems);
  })
   .catch(function (error) {
          console.log(error);
   });
  }

  render () {
    return (
      <div className="shopping-cart">
        <div className="container">
          <h2>Your items</h2>
          {this.state.cartItems}
          <div id="checkout-area" className="row">
            <a href="/receipt" className="btn buy-items">buy items</a>
          </div>
        </div>

      </div>
    )
  }
}

export default ShoppingCart;
