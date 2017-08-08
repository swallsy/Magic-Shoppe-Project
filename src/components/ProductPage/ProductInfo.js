import React, {Component} from "react";

import {Link} from 'react-router-dom';

export default class ProductInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			magicItems: null
		}
	}

	componentDidMount() {
		fetch("https://guarded-retreat-23297.herokuapp.com/products")
			.then(response => response.json())
			.then(magicItems => {
			magicItems.map(magicItem => {
				let prodnum = parseInt(this.props.prodnum);
				console.log("the product number is, ", prodnum);
				if (prodnum === magicItem.id) {
					console.log("match found");
					this.setState(
						{magicItems:
						   <div className="row imageAndDescContainer" key="{magicItem.id}">
									<img src={magicItem.image} className="productImage col-md-4" />
									<div className="productDescriptionGroup col-md-8">
										<h2 className="productTitle">{magicItem.name}</h2><span>${magicItem.price}</span>
										<p>{magicItem.description}</p>
										<div className="select-container">
  										<select>
											  <option value="1">1</option>
											  <option value="2">2</option>
											  <option value="3">3</option>
											  <option value="4">4</option>
												<option value="5">5</option>
  										</select>
											<Link className="navlink btn add-to-cart" to={`/cart/${magicItem.id}`}>
												Add to Cart
											</Link>
										</div>
								</div>
							</div>
						})
				 }
			})
		})
  }
	render() {
		return (
			<div className="productContainer col-md-12">
				{this.state.magicItems}
			</div>
	)
	}
}
