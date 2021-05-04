import React from 'react';
import '../style/Campaign.css';

export default class OnlineResources extends React.Component {
  render() {
    return (
      <div className={`grid grid-cols-1 py-20 ${this.props.className}`}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full sm:w-1/2 md:w-1/3 h-60 bg-red-50 p-4 flex flex-col rounded-lg shadow-lg">
            <div className="flex">
              <div className="text-red-500 text-8xl font-bold questrial">1</div>
              <i className="ml-auto bi-box-arrow-in-right text-4xl text-red-500"></i>
            </div>
            <div className="mt-auto questrial text-2xl font-bold">Sign up to be an Advocate</div>
          </div>
          <div className="w-full sm:w-1/2 md:w-2/3 md:pl-6 md:pt-0 pt-8">
            <p className="text-gray-600">All you have to do is fill out a simple form with your name, email, and other basic details.</p>
            <button className="mt-6 questrial text-black text-lg font-bold transition duration-150 hover:text-green-500 cursor-pointer">Become an Advocate <i className="bi-chevron-right"></i></button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-12">
          <div className="w-full sm:w-1/2 md:w-1/3 h-60 bg-yellow-50 p-4 flex flex-col rounded-lg shadow-lg">
            <div className="flex">
              <div className="text-yellow-500 text-8xl font-bold questrial">2</div>
              <i className="ml-auto bi-envelope text-4xl text-yellow-500"></i>
            </div>
            <div className="mt-auto questrial text-2xl font-bold">Receive your welcome email</div>
          </div>
          <div className="w-full sm:w-1/2 md:w-2/3 md:pl-6 md:pt-0 pt-8">
            <p className="text-gray-600">We'll send you an email with your unique campaign link and all of our tips and tricks to become a successful fundraiser.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-12">
          <div className="w-full sm:w-1/2 md:w-1/3 h-60 bg-blue-50 p-4 flex flex-col rounded-lg shadow-lg">
            <div className="flex">
              <div className="text-blue-500 text-8xl font-bold questrial">3</div>
              <i className="ml-auto bi-people text-4xl text-blue-500"></i>
            </div>
            <div className="mt-auto questrial text-2xl font-bold">Launch your campaign</div>
          </div>
          <div className="w-full sm:w-1/2 md:w-2/3 md:pl-6 md:pt-0 pt-8">
            <p className="text-gray-600">
              Rack up those donations by directing anyone to donate via your unique link!
              The more money you raise, the more you earn.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-12">
          <div className="w-full sm:w-1/2 md:w-1/3 h-60 bg-green-50 p-4 flex flex-col rounded-lg shadow-lg">
            <div className="flex">
              <div className="text-green-500 text-8xl font-bold questrial">4</div>
              <i className="ml-auto bi-cash-stack text-4xl text-green-500"></i>
            </div>
            <div className="mt-auto questrial text-2xl font-bold">Get paid</div>
          </div>
          <div className="w-full sm:w-1/2 md:w-2/3 md:pl-6 md:pt-0 pt-8">
            <p className="text-gray-600">
              At the end of your campaign, Benefact will pay you directly.
              We'll also send you an Impact Report detailing the amount of money you raised and the impact that you made on Sharing Excess.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
