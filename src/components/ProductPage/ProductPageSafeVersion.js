import React, {Component} from "react";
import "../styles/ProductPage.css";
import image from "../imageplaceholder.jpg";

import {Link} from 'react-router-dom';

class ProductPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			magicItems: [],
			pageCard: 'ERROR'
		}
	}
	cartFunction() {
		console.log(this.state.pageCard)
	}
	componentDidMount() {
		fetch("https://guarded-retreat-23297.herokuapp.com/products")
			.then(response => response.json())
			.then(magicItems => {
			magicItems.map(magicItem => {
				let prodnum = parseInt(this.props.match.params.prodnum);
				console.log(prodnum);
				if (prodnum === magicItem.id) {
					console.log("match found");
					this.setState(
						{pageCard:
						<div className="pageContainer container">

								<div className="productContainer col-md-12" key={magicItem.id}>
									<div className="row imageAndDescContainer">
										<img src={magicItem.image} className="productImage col-md-4" />
										<div className="productDescriptionGroup col-md-8">
											<h2 className="productTitle">{magicItem.name}</h2><span>${magicItem.price}</span>
											<p>Description: {magicItem.description}</p>
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
								<div className="row">
									<div className="revsDescContainer col-md-12">
											<div id="reviews">
												<h3>Reviews</h3>
												<p>enter product reviews here</p>
											</div>
									</div>
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
			<div>
				{this.state.pageCard}
			</div>
	)
	}
}

export default ProductPage;
