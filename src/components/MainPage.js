import React, { Component } from 'react';
import "../styles/MainPage.css";

import {NavLink} from 'react-router-dom';

 class MainPage extends Component   {
   constructor(props) {
         super(props)
         this.state = {
             listings: []
         }
     }

     componentDidMount() {
      fetch('https://guarded-retreat-23297.herokuapp.com/products')
        .then (response => response.json())
        .then (response => {
            console.log(response);

        let itemCards = response.map(product => {
            return(
                <div key={product.id} className="col-md-4">
                  <div className="card">
                    <img alt="card" src={product.image} className="card-img-top display-block photo" />
                    <div className="card-block card-info">
                      <h4 className="card-title item-name">{product.name}</h4><span>$</span><span className="price">{product.price}</span>
                      <br/>
                      <p className="card-text description">{product.description}</p>
											<NavLink activeClassName="selected" className="btn view-item" to={`product/${product.id}`}>view item</NavLink>
                    </div>
                  </div>
              </div>
            )
        })
            this.setState({listings: itemCards})
            console.log(this.state.listings);
     })
      .catch(function (error) {
             console.log(error);
      });
    }

    render() {
    return(
      <div className="home-wrapper container">
        <div id="splash-area">
          <h1 id="title"><span>Ye Olde</span><br />Magic Shoppe</h1>
          <div id="bgvid">
            <video loop muted autoPlay className="fullscreen-bg__video">
              <source src="../matcha/Mp4/Matcha.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div id="main-wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="row card-group" id="cards-area">
                {this.state.listings}
              </div>
            </div>
          </div>
        </div>
    </div>
      )
    }
  }

export default MainPage;
