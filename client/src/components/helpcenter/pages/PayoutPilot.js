import React from 'react';
import HCNavbar from '../HCNavbar';

export default class PayoutPilot extends React.Component {
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
              <div className="mt-6">
                <p className="mt-2 text-gray-700">
                  You'll be paid within 2 weeks after your campaign end date according to the share percentage of the nonprofit.
                  For example, if you raise $500 with a share percentage of 5% and a campaign end date of December 31st, you'll receive a payout of $25 by January 14th.
                  Easy as that!
                </p>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl">How will you be paid?</h3>
              <p className="text-gray-700 mt-4">
                Benefact will send you a digital check to the email address you used to sign up to be a fundraiser.
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
            <p className="text-gray-500 mt-12">
              * Please note: all payouts are subject to a $1 transaction fee.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
