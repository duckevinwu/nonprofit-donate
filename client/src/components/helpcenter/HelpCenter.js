import React from 'react';
import HCNavbar from './HCNavbar';
import HCCard from './HCCard';
import '../../style/HelpCenter.css';

export default class HelpCenter extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 hero-section">
        <HCNavbar/>
        <div className="flex justify-center py-12 px-3">
          <div>
            <HCCard
              className="mb-8"
              icon="bi-question-circle"
              title="What's the right type of campaign for you?"
              description="Learn about the two different types of campaigns you can run and see which one might be the better fit for you."
              redirect="/help/campaigntypes"
            />
            <HCCard
              className="mb-8"
              icon="bi-cash-stack"
              title="Payouts"
              description="Everything you need to know about payouts, including when and how you'll be paid."
              redirect="/help/payout"
            />
          </div>
        </div>
      </div>
    )
  }
}
