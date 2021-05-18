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
import IdeaBank from './IdeaBank';

// campaigns
import DemoCampaign from './campaigns/DemoCampaign.js';

// help center
import HelpCenter from './helpcenter/HelpCenter';
import CampaignTypes from './helpcenter/pages/CampaignTypes';
import Payout from './helpcenter/pages/Payout';

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
							path="/demo"
							render={() => (
								<DemoCampaign />
							)}
						/>
						<Route
							exact
							path="/ideas"
							render={() => (
								<IdeaBank />
							)}
						/>
						<Route
							exact
							path="/help"
							render={() => (
								<HelpCenter />
							)}
						/>
						<Route
							exact
							path="/help/campaigntypes"
							render={() => (
								<CampaignTypes />
							)}
						/>
						<Route
							exact
							path="/help/payout"
							render={() => (
								<Payout />
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}
