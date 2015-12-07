import React from 'react';
import { render } from 'react-dom'
import { Route, Router } from 'react-router';
import Main from './components/Main';
import Composer from './components/Composer';
import FrontPage from './components/FrontPage';
import PiecesList from './components/PiecesList';
import RecordingList from './components/RecordingList';
import TrackList from './components/TrackList';
import createBrowserHistory from 'history/lib/createBrowserHistory';

render((
	<Router>
		<Route path="/" component={Main}>
			<Route path=":composer" component={ Composer } />
			<Route path=":composer/:compositionType" component={ PiecesList } />
			<Route path=":composer/:compositionType/:composition" component={ RecordingList } />
			<Route path=":composer/:compositionType/:composition/:recording" component={ TrackList } />
			// <Route path="*" component={ FrontPage } />

		</Route>
	</Router>
), document.getElementById('app'));