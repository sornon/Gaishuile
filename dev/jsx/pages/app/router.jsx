var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;
var Master = require('./master.jsx');
var Home = require('./home.jsx');


var AppRoutes = (
    <Route name="root" path = "/" handler={Master}>
        <DefaultRoute handler={Home}/>
    </Route>
);

module.exports = AppRoutes;