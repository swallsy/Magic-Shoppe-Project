import React, {Component} from "react";

export default class Reviews extends Component {
	constructor(props) {
		super(props)
		this.state = {
			reviews: null
		}
	}

  componentDidMount() {
    console.log(this.props.prodnum);
    fetch("https://guarded-retreat-23297.herokuapp.com/reviews")
      .then(response => response.json())
      .then(reviews => {
      reviews.map(review => {
        let prodnum = parseInt(this.props.prodnum);
				console.log(prodnum);
				if (prodnum === review.productID) {
					console.log("match found");
          this.setState(
            {reviews:
              <div className="row">
                <div className="review-item col-md-11">
                  <p>Reviewer: {review.name}</p>
                  <p>{review.content}</p>
                  <p>{review.rating} out of 10</p>
                </div>
              </div>
            })
          }
        })
      })
  }

  render() {
    return (
      <div className="revsDescContainer container">
          <h2 id="review-title">Reviews</h2>
          {this.state.reviews}
      </div>
    )
  }
}
