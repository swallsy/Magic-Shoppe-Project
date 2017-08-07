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
		fetch("https://guarded-retreat-23297.herokuapp.com/products").then(response => response.json()).then(magicItems => {
		magicItems.map(magicItem => {
			let prodnum = parseInt(this.props.match.params.prodnum);
			console.log(prodnum);
			if (prodnum === magicItem.id) {
				console.log("match found");
				this.setState(
					{pageCard:
					<div className="pageContainer">
							<div className="productContainer" key={magicItem.id}>
								<div className="imageAndDescContainer">
									<img src={magicItem.image} className="productImage" />
									<div className="productDescriptionGroup">
										<span className="productTitle">
											{magicItem.name}
										</span>
										<span className="productDescriptionPreview">
											{magicItem.description}
										</span>
									</div>
								</div>
								<Link className="navlink btn view-item" to={`/cart/${magicItem.id}`}>
									Add to Cart
								</Link>
							</div>
							<div className="revsDescContainer">
								<ul className="nav nav-tabs">
									<li className="active nav-item tab">
										<a data-toggle="tab" href="#description">
											Description
										</a>
									</li>
									<li className="nav-item tab">
										<a data-toggle="tab" href="#reviews">
											Reviews
										</a>
									</li>
								</ul>
								<div className="tab-content">
									<div id="description" className="tab-pane fade inactive">
										<h3>Description</h3>
										<p>{magicItem.description}</p>
									</div>
									<div id="reviews" className="tab-pane fade">
										<h3>Reviews</h3>
										<p>enter product reviews here</p>
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
