import React, {Component} from "react";
import "../../styles/ProductPage.css";
import ProductInfo from './ProductInfo.js';
import Reviews from './Reviews.js';

import {Link} from 'react-router-dom';

class ProductPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pageCard: 'null'
		}
	}
	cartFunction() {
		console.log(this.state.pageCard)
	}

	render() {
		return (
			<div className="pageContainer container">
				<ProductInfo prodnum={this.props.match.params.prodnum}/>
				<Reviews prodnum={this.props.match.params.prodnum}/>
			</div>
		)
	}
}

export default ProductPage;
