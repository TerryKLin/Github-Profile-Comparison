var React = require ("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
import { browserHistory, Router, Route } from 'react-router'

var routes = (
	<Router history= {browserHistory}>
		{/*Activate Main component regardless the page the user goes*/}
		<Route path = '/' component = {Main}>
			<Route path = '/home' component = {Home}/>
		</Route>
	</Router>
);

module.exports = routes;