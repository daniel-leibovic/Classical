import React from 'react';
import { render } from 'react-dom'
import Router from 'react-router';
import routes from './config/routes';
import Main from './components/Main';

render((
	<Router>
		{routes}
	</Router>
), document.getElementById('app'));