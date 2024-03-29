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
              icon="bi-cash-stack"
              title="Payouts"
              description="Everything you need to know about payouts, including when and how you'll be paid."
              redirect="/help/payout"
            />
            <HCCard
              className="mb-8"
              icon="bi-journal-check"
              title="Getting started with GiveButter"
              description="For nonprofits - a comprehensive guide to creating a GiveButter account and connecting your organization's bank account."
              redirect="/help/gb"
            />
          </div>
        </div>
      </div>
    )
  }
}
