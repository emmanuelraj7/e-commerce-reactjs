"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;




var routes = (
   
     <Route name="app" path="/" handler={require('./components/app')}>
     <DefaultRoute handler={require('./components/common/homePage')} />
     <Route name="home" path="home" handler={require('./components/common/homePage')} />
     <Route name="store" path="store" handler={require('./components/Store/storePage')} />
     <Route name="cart" path="cart" handler={require('./components/Cart/cart')} />
     </Route>

);


module.exports = routes;
