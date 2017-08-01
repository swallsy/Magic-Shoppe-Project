import React, { Component } from 'react';
import "../styles/MainPage.css";

class MainPage extends Component {
  render () {
    return (
      <div className="home-wrapper container-fluid">
        <div id="splash-area">
          <div id="bgvid">
            <video loop muted autoPlay className="fullscreen-bg__video">
                <source src="../matcha/Mp4/Matcha.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
				<br/>
				<p><a href='/product'>Product page</a></p>
				<p><a href='/receipt'>Receipt</a></p>
				<p><a href='/cart'>Shopping cart</a></p>
			</div>
    )
  }

}

export default MainPage;
