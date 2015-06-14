var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;
var Master = require('./pages/master.jsx');
var Start = require('./pages/start.jsx');
var Register = require('./pages/register.jsx');


var AppRoutes = (
    <Route name="root" path = "/" handler={Master}>
        <Route name="start" handler={Start}>
            <Route name="register" handler={Register}/>
        </Route>
        <DefaultRoute handler={Start}/>
    </Route>
);

module.exports = AppRoutes;