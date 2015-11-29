import React from 'react';
import { render } from 'react-dom'
import { Route, Router } from 'react-router';
import Main from './components/Main';
import Composer from './components/Composer';
import FrontPage from './components/FrontPage';
import piecesList from './components/piecesList';
import recordingList from './components/recordingList';
import createBrowserHistory from 'history/lib/createBrowserHistory'

render((
	<Router>
		<Route path="/" component={Main}>
			<Route path=":composer" component={ Composer } />
			<Route path=":composer/:compositionType" component={ piecesList } />
			<Route path=":composer/:compositionType/:composition" component={ recordingList } />
			// <Route path="*" component={ FrontPage } />

		</Route>
	</Router>
), document.getElementById('app'));