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
              <div className="review-item">
                  <p>{review.name}</p>
                  <p>{review.content}</p>
                  <p>{review.rating} out of 10</p>
              </div>
            })
          }
        })
      })
  }

  render() {
    return (
      <div className="row">
        <div className="revsDescContainer col-md-12">
          <div id="reviews">
            <h3>Reviews</h3>
            {this.state.reviews}
          </div>
        </div>
      </div>
    )
  }
}
