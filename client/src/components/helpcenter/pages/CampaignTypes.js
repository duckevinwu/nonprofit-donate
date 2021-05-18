import React from 'react';
import HCNavbar from '../HCNavbar';

export default class CampaignTypes extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 hero-section">
        <HCNavbar/>
        <div className="flex justify-center py-12 px-3">
          <div className="bg-white help-center py-20 px-3 sm:px-12 lg:px-24 shadow-md rounded-md">
            <h1 className="text-3xl">What's the right type of campaign for you?</h1>
            <h2 className="mt-3 text-lg text-gray-400">Learn about the two different types of campaigns you can run and see which one might be the better fit for you.</h2>
            <div className="h-12 w-full flex items-center justify-center">
              <div className="border-t-2 border-green-400 w-full"></div>
            </div>
            <p className="mt-3 text-gray-700">
              At Benefact, it's our goal to help you fundraise in the most enjoyable and effective way possible.
              To do so, we've divided campaigns Advocates can run into two categories: <b>One-time Campaigns</b> and <b>Running Campaigns</b>.
              Each type of campaign has its own unique perks and benefits - it's up to you to decide which one you want to go with!
            </p>
            <p className="mt-3 text-gray-700">
              Remember, these catergories we define aren't rules - they're guidelines!
              Feel free to get as creative as you want!
            </p>
            <div className="mt-12">
              <h3 className="text-2xl">One-time Campaign</h3>
              <p className="mt-3 text-gray-700">
                A one-time campaign, like its name suggests, happens one time and with a set end date.
                These campaigns usually revolve around some kind of event, such as a celebration, holiday, and many more (check out more ideas at our <a target="_blank" href="/ideas" className="text-green-400 underline">Idea Bank</a>).
                Since these events have a set date, consider adding a fundraising target amount to your campaign to give some extra motivation to donors.
              </p>
              <p className="mt-3 text-gray-700">
                A one-time campaign is perfect for you if you've got an event coming up in the near future which you can dedicate to a cause you care about.
                This type of campaign is also great for people who enjoy organizing events, such as a 10k for charity or a sporting event.
                We recommend fundraising beginners to start with a one-time campaign, as focusing the campaign on an event makes it much easier to motivate potential donors.
              </p>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl">Running Campaign</h3>
              <p className="mt-3 text-gray-700">
                A running campaign, unlike a one-time campaign, doesn't have a set end date.
                Instead, the campaign continues for as long as you want it to.
                Since this type of campaign doesn't revolve around some kind of event, you'll likely have to continuously motivate potential donors.
              </p>
              <p className="mt-3 text-gray-700">
                A running campaign is perfect for you if you've got a wide network of donors to reach out to and an easy way to reach them.
                For example, this option would be great for influencers or content creators as an additional revenue stream built around supporting great causes.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
