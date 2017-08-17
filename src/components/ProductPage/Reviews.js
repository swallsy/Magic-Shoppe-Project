import React, {Component} from "react";

export default class Reviews extends Component {
	constructor(props) {
		super(props)
		this.state = {
			reviews: null
		}
	}

  componentDidMount() {
    // console.log(this.props.prodnum);
    fetch("https://guarded-retreat-23297.herokuapp.com/reviews")
      .then(response => response.json())
      .then(reviews => {
				let reviewsForItem = reviews.map(review => {
        let prodnum = parseInt(this.props.prodnum);
				if (prodnum === review.productID) {
					console.log("match found");
					return (
              <div className="row">
                <div className="col-md-12">
									<div className="review-item">
                  	<p>Reviewer: {review.name}</p>
                  	<p>{review.content}</p>
                  	<p>{review.rating} out of 10</p>
									</div>
                </div>
              </div>
					)
        }
      })
		 this.setState({reviews: reviewsForItem})
    })
  }

  render() {
    return (
      <div className="revsDescContainer">
          <h2 id="review-title">Reviews</h2>
          {this.state.reviews}
      </div>
    )
  }
}
