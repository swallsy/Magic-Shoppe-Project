import React, {Component} from "react";
import "../styles/ProductPage.css";
import image from "../imageplaceholder.jpg";

import {NavLink} from 'react-router-dom';

class ProductPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pageCard: '',
			magicItems: []
		}
	}
	componentDidMount() {

		fetch("https://guarded-retreat-23297.herokuapp.com/products").then(response => response.json()).then(magicItems => {
			let match = this.props.match.params;
			this.setState({
				pageCard: <div className="container pageContainer">
						<div className="row productContainer">
							<div className="imageAndDescContainer col-md-12">
								<img src={magicItems[`${match.prodnum}`].image} className="productImage col-md-5" />
									<div className="productDescriptionGroup col-md-7">
										<span className="productTitle">{magicItems[`${match.prodnum}`].name}</span>
										<span className="productDescriptionPreview">
											{magicItems[`${match.prodnum}`].description}
										</span>
										<span>
											<nav>
								        <NavLink  className="nav-link" exact to="/cart">
								          Add to Cart
								        </NavLink>
								      </nav>
										</span>
									</div>
							</div>
						</div>
						<div className="revsDescContainer">
							<ul className="nav nav-tabs">
								<li className="active">
									<a data-toggle="tab" href="#description">
										Description
									</a>
								</li>
								<li>
									<a data-toggle="tab" href="#reviews">
										Reviews
									</a>
								</li>
							</ul>
							<div className="tab-content">
								<div id="description" className="tab-pane fade in active">
									<h3>Description</h3>
									<p>{magicItems[`${match.prodnum}`].description}</p>
								</div>
								<div id="reviews" className="tab-pane fade">
									<h3>Reviews</h3>
									<p>enter product reviews here</p>
								</div>
							</div>
						</div>
					</div>
			})
		})
	}
	render() {

		return (
			<div>
				{this.state.pageCard}
			</div>
		);
	}
}

export default ProductPage;
