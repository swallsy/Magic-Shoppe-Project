import React, { Component } from 'react';

class MainPage extends Component {
  render () {
    return (
      <div className="header">
				<p>This is the main page</p>
				<br/>
				<p><a href='/product'>Product page</a></p>
				<p><a href='/receipt'>Receipt</a></p>
				<p><a href='/cart'>Shopping cart</a></p>
			</div>
    )
  }

}

export default MainPage;
