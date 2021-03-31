import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import Test from './Test';
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

						/>
						<Route
							exact
							path="/dashboard"
							render={() => (
								<Test />
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
