import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import LandingPage from './LandingPage';
import NonprofitCenter from './NonprofitCenter';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile';
import ReturnFromEmail from './ReturnFromEmail';
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
							path="/signup"
							render={() => (
								<SignUp />
							)}
						/>
						<Route
							exact
							path="/login"
							render={() => (
								<Login />
							)}
						/>
						<Route
							exact
							path="/profile"
							render={() => (
								<Profile />
							)}
						/>
						<Route
							exact
							path="/action"
							render={() => (
								<ReturnFromEmail />
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
