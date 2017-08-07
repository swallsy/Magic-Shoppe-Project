import React, { Component } from 'react';
import "../styles/ShoppingCart.css";



class ShoppingCart extends Component {

  constructor(props) {
        super(props)
        this.state = {
            cartItems: [],
						cardCards: ''
        }
    }


	componentDidMount() {
		fetch("https://guarded-retreat-23297.herokuapp.com/products").then(response => response.json()).then(magicItems => {
			magicItems.map(magicItem => {
				let prodnum = parseInt(this.props.match.params.prodnum);
				console.log(prodnum);
				if (prodnum === magicItem.id) {
					let oldCart = this.state.cartItems
					let newItem={}
					newItem.id = magicItem.id;
					newItem.name = magicItem.name;
					newItem.price = magicItem.price;
					newItem.image = magicItem.image;
					newItem.quantity = 3;
					oldCart.push(newItem);

					let cartCards =
						oldCart.map(product => {
							return(
								<div key={product.id} className="row">
									<div className="col-md-12 item-row">
										<img src={product.image} className="col-md-3 item-image photo"/>
										<div className="col-md-9 item_info">
											<div className="left-info col-md-7">
												<h4 className="item-name">{product.name}</h4>
												<p>${product.price}</p>
												<p>{product.description}</p>
											</div>
											<div className="right-info col-md-2">
												<p className="quantity">Quantity: {product.quantity}</p>
												<p className="total">Total: $ {product.price * product.quantity}</p>
												<a href="#" className="btn remove-item">remove item</a>
											</div>
										</div>
									</div>
								</div>
							)
						})
					console.log(cartCards)
					this.setState({cartCards: cartCards})
					console.log(this.state.cartCards)
				}
			})
		})
	}
	render(){
		return (
			<div>
				{this.state.cartCards}
			</div>
		)
	}
}



export default ShoppingCart;
