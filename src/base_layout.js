import React, { Component } from "react";
import "./styles/App.css";


import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default BaseLayout;
