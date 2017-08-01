import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

// import React router

import { BrowserRouter, Route, Switch } from "react-router-dom";

// import components

import MainPage from "./components/MainPage.js";
import ProductPage from "./components/ProductPage.js";
import ShoppingCart from "./components/ShoppingCart.js";
import Receipt from "./components/Receipt.js";

import BaseLayout from "./base_layout.js"

ReactDOM.render (
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/" component={MainPage} />
        <Route path="/product" component={ProductPage} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/receipt" component={Receipt} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
