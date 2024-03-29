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
import LinkDemo from './LinkDemo';
import Influencers from './Influencers';

// campaigns
import DemoCampaign from './campaigns/DemoCampaign.js';
import SharingExcess from './campaigns/SharingExcess.js';

// help center
import HelpCenter from './helpcenter/HelpCenter';
import CampaignTypes from './helpcenter/pages/CampaignTypes';
import PayoutPilot from './helpcenter/pages/PayoutPilot';
import GiveButter from './helpcenter/pages/GiveButter';

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
							path="/nonprofits/sharingexcess"
							render={() => (
								<SharingExcess />
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
							path="/linkdemo"
							render={() => (
								<LinkDemo />
							)}
						/>
						<Route
							exact
							path="/ambassador"
							render={() => (
								<Influencers />
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
								<PayoutPilot />
							)}
						/>
						<Route
							exact
							path="/help/gb"
							render={() => (
								<GiveButter />
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}
