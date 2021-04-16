import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import LandingPage from './LandingPage';
import NonprofitCenter from './NonprofitCenter';
import TestCampaign from './TestCampaign';

export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<LandingPage />
							)}
						/>
						<Route
							exact
							path="/nonprofits"
							render={() => (
								<NonprofitCenter />
							)}
						/>
						<Route
							exact
							path="/test"
							render={() => (
								<TestCampaign />
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}
