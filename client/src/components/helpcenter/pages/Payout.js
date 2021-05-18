import React from 'react';
import HCNavbar from '../HCNavbar';

export default class Payout extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 hero-section">
        <HCNavbar/>
        <div className="flex justify-center py-12 px-3">
          <div className="bg-white help-center py-20 px-3 sm:px-12 lg:px-24 shadow-md rounded-md">
            <h1 className="text-3xl">Payouts</h1>
            <h2 className="mt-3 text-lg text-gray-400">Everything you need to know about payouts, including when and how you'll be paid.</h2>
            <div className="h-12 w-full flex items-center justify-center">
              <div className="border-t-2 border-green-400 w-full"></div>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl">When will you be paid?</h3>
              <p className="mt-3 text-gray-700">Payout schedule depends on the type of campaign you're running.</p>
              <div className="mt-6">
                <h4 className="text-xl border-l-4 pl-2 border-green-400">One-time Campaign</h4>
                <p className="mt-2 text-gray-700">
                  You'll be paid within 2 weeks after your campaign end date according to the share percentage of the nonprofit.
                  For example, if you raise $500 with a share percentage of 5% and a campaign end date of December 31st, you'll receive a payout of $25 by January 14th.
                  Easy as that!
                </p>
              </div>
              <div className="mt-6">
                <h4 className="text-xl border-l-4 pl-2 border-green-400">Running Campagin</h4>
                <p className="mt-2 text-gray-700">
                  For a running campaign, you'll be paid monthly depending on whether or not hit the fundraising threshold of $25.
                  This means that if you don't raise $25 by the end of the month, your payout will roll over to the next month.
                  This rollover continues until your amount fundraised hits the threshold of $25.
                  If this threshold isn't hit by the end of the year, you'll be paid out within 2 weeks after the year ends.
                </p>
                <div className="mt-4 pl-6">
                  <h5 className="text-lg mb-1">Scenario 1:</h5>
                  <ul className="list-disc list-inside text-gray-700">
                    <li><b>May</b>: You raise $30</li>
                    <li><b>Within 2 weeks of May 31</b>: You will be paid out $30 &times; share percentage</li>
                  </ul>
                </div>
                <div className="mt-4 pl-6">
                  <h5 className="text-lg mb-1">Scenario 2:</h5>
                  <ul className="list-disc list-inside list-indent text-gray-700">
                    <li><b>May</b>: You raise $15</li>
                    <li><b>May 31</b>: Since you didn't hit the payout threshold of $25, the $15 raised will roll over to the next month</li>
                    <li><b>June</b>: You raise $15 (making your total amount fundraised $30)</li>
                    <li><b>Within 2 weeks of June 30</b>: Since your cumulative amount fundraised has exceeded the payout threshold, you will be paid out $30 &times; share percentage</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-gray-700">We know that this might be a little confusing at first, so don't hesitate to contact us through chat or Discord if you have any questions!</p>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl">How will you be paid?</h3>
              <p className="text-gray-700 mt-4">
                Benefact will send you a digital check to the email address you used to sign up to be an Advocate.
                When you receive this email, you'll have 2 options to transfer the money into your bank account: ACH Transfer or Printed Check.
              </p>
              <p className="text-gray-700 mt-4">
                With an <b>ACH Transfer</b>, all you need is the routing and account number of the destination account, and follow the steps listed in the email.
                You'll usually receive funds after several business days.
              </p>
              <p className="text-gray-700 mt-4">
                With a <b>Printed Check</b>, all you have to do is print the digital check on standard printer paper and deposit it just like a regular check - with a banking mobile app, in person at a local branch, or at an ATM.
              </p>
              <p className="text-gray-700 mt-4">
                If neither of these payment methods work for you - please reach out to us! We're happy to accomodate!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
