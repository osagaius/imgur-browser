var React = require('react');
import { Router, Route, Link } from 'react-router'

var Main = require('./components/main');
var Topic = require('./components/topic');
var ImageDetail = require('./components/image-detail');

module.exports = (
	<Router>
		<Route path="/home2" component={Main}>
			<Route path="topics/:id" component={Topic}/>
			<Route path="images/:id" component={ImageDetail}/>
		</Route>
	</Router>
)
